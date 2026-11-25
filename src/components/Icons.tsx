import {
  Award,
  BrainCircuit,
  Calculator,
  ClipboardList,
  CodeXml,
  Container,
  Cpu,
  FileText,
  Factory,
  Gauge,
  Globe,
  HardHat,
  HeartPulse,
  Leaf,
  Mail,
  MapPin,
  Radio,
  Shield,
  Sun,
  Target,
  Thermometer,
  TrendingUp,
  Users,
  Zap,
  type LucideProps,
} from 'lucide-react';

export type AccentKey = 'blue' | 'cyan' | 'green' | 'orange' | 'purple';

export const ACCENT_STYLES: Record<
  AccentKey,
  { color: string; tint: string; rgb: string }
> = {
  blue: {
    color: 'rgb(46, 91, 255)',
    tint: 'rgb(238, 242, 255)',
    rgb: '46, 91, 255',
  },
  cyan: {
    color: 'rgb(0, 160, 214)',
    tint: 'rgb(224, 245, 253)',
    rgb: '0, 160, 214',
  },
  green: {
    color: 'rgb(52, 168, 83)',
    tint: 'rgb(230, 244, 234)',
    rgb: '52, 168, 83',
  },
  orange: {
    color: 'rgb(243, 108, 33)',
    tint: 'rgb(255, 243, 236)',
    rgb: '243, 108, 33',
  },
  purple: {
    color: 'rgb(106, 61, 204)',
    tint: 'rgb(243, 238, 255)',
    rgb: '106, 61, 204',
  },
};

export type IconName =
  | 'award'
  | 'brain-circuit'
  | 'calculator'
  | 'clipboard-list'
  | 'code-xml'
  | 'container'
  | 'cpu'
  | 'factory'
  | 'file-text'
  | 'gauge'
  | 'globe'
  | 'hard-hat'
  | 'heart-pulse'
  | 'leaf'
  | 'mail'
  | 'map-pin'
  | 'radio'
  | 'shield'
  | 'sun'
  | 'target'
  | 'thermometer'
  | 'trending-up'
  | 'users'
  | 'zap';

const ICON_MAP = {
  award: Award,
  'brain-circuit': BrainCircuit,
  calculator: Calculator,
  'clipboard-list': ClipboardList,
  'code-xml': CodeXml,
  container: Container,
  cpu: Cpu,
  factory: Factory,
  'file-text': FileText,
  gauge: Gauge,
  globe: Globe,
  'hard-hat': HardHat,
  'heart-pulse': HeartPulse,
  leaf: Leaf,
  mail: Mail,
  'map-pin': MapPin,
  radio: Radio,
  shield: Shield,
  sun: Sun,
  target: Target,
  thermometer: Thermometer,
  'trending-up': TrendingUp,
  users: Users,
  zap: Zap,
} as const;

export function DynamicIcon({
  name,
  ...props
}: { name: IconName } & LucideProps) {
  const Component = ICON_MAP[name];
  return <Component {...props} />;
}
