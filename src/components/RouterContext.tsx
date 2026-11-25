import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getPageMeta, normalizePath, PageRoute, parseRoute } from '../utils/router';

interface RouterContextValue {
  currentPath: string;
  route: PageRoute;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [locationState, setLocationState] = useState(() => ({
    pathname: typeof window !== 'undefined' ? window.location.pathname : '/',
    search: typeof window !== 'undefined' ? window.location.search : '',
  }));

  useEffect(() => {
    const handlePopState = () => {
      setLocationState({
        pathname: window.location.pathname,
        search: window.location.search,
      });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const route = useMemo(
    () => parseRoute(locationState.pathname, locationState.search),
    [locationState.pathname, locationState.search]
  );

  const currentPath = useMemo(
    () => normalizePath(locationState.pathname),
    [locationState.pathname]
  );

  useEffect(() => {
    const meta = getPageMeta(route);
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute('content', meta.description);
    }
  }, [route]);

  const navigate = useCallback((to: string) => {
    const [rawPathname, rawQuery] = to.split('?');
    const nextPathname = normalizePath(rawPathname);
    const nextSearch = rawQuery ? `?${rawQuery}` : '';
    const fullTarget = `${nextPathname}${nextSearch}`;

    if (window.location.pathname !== nextPathname || window.location.search !== nextSearch) {
      window.history.pushState({}, '', fullTarget);
    }
    setLocationState({ pathname: nextPathname, search: nextSearch });
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const value = useMemo(
    () => ({ currentPath, route, navigate }),
    [currentPath, route, navigate]
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter(): RouterContextValue {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error('useRouter must be used inside RouterProvider');
  }
  return ctx;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
