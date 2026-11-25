import { MEDIA } from './siteConfig';

export interface ProcessStep {
  number: string;
  title: string;
  shortLine: string;
  description: string;
  checklist: readonly string[];
  image: string;
  imageAlt: string;
}

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    number: '01',
    title: 'Inspect',
    shortLine: 'Understand the motorcycle.',
    description:
      'Every motorcycle arrives with its own story and wear pattern. We inspect the frame, engine compression, brakes, suspension, wiring, and parts history before recommending work.',
    checklist: [
      'Full mechanical and structural baseline audit',
      'Discussion of riding goals, budget, and parts condition',
      'Honest evaluation before a single bolt is turned',
    ],
    image: MEDIA.beforeClassic,
    imageAlt: 'Initial inspection of a vintage motorcycle arriving at Hariom Moto Works',
  },
  {
    number: '02',
    title: 'Diagnose',
    shortLine: 'Identify the problem.',
    description:
      'Rather than guessing or swapping parts blindly, we trace mechanical noises, electrical faults, wear tolerances, and alignment issues down to their root cause.',
    checklist: [
      'Measured engine, drivetrain, and bearing tolerance checks',
      'Charging, ignition, and fueling diagnostics',
      'Complete list of worn components requiring genuine replacement',
    ],
    image: MEDIA.engineRebuild,
    imageAlt: 'Engine cylinder head and precision calipers on the diagnostic workbench',
  },
  {
    number: '03',
    title: 'Plan',
    shortLine: 'Determine the right repair or build approach.',
    description:
      'We map out the exact spare parts needed, fabrication steps, finish direction, and realistic workshop timeline so you know what is happening at every stage.',
    checklist: [
      'Genuine parts sourcing and bill of materials confirmation',
      'Restoration specification or custom stance blueprint',
      'Clear scope approval and timeline schedule',
    ],
    image: MEDIA.tigFabrication,
    imageAlt: 'Frame setup on alignment jig prior to welding and fabrication',
  },
  {
    number: '04',
    title: 'Build',
    shortLine: 'Repair, replace, fabricate or modify.',
    description:
      'Hands-on workshop execution begins—rebuilding engines, fitting fresh components, TIG-welding custom metal parts, painting, polishing, and assembling cleanly to torque spec.',
    checklist: [
      'Engine rebuilds, servicing, and genuine component installation',
      'In-house metalwork fabrication, welding, and refinishing',
      'Clean-bench assembly with properly routed looms and cables',
    ],
    image: MEDIA.cafeTracker,
    imageAlt: 'Custom built motorcycle taking shape inside the workshop bay',
  },
  {
    number: '05',
    title: 'Test',
    shortLine: 'Check the motorcycle before delivery.',
    description:
      'Nothing leaves Hariom Moto Works untested. We heat-cycle engines, bleed brakes, verify charging and fueling, complete road shakedowns, and perform a final nut-and-bolt check.',
    checklist: [
      'Road test across braking, shifting, handling, and throttle response',
      'Post-shakedown fastener torque and fluid verification',
      'Final detailing and handover walkthrough with the owner',
    ],
    image: MEDIA.afterClassic,
    imageAlt: 'Completed restored motorcycle ready for handover at Hariom Moto Works',
  },
];
