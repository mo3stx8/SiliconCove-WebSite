import {
  Cloud,
  Cpu,
  Globe,
  Headphones,
  Lightbulb,
  Settings,
  Shield,
  Smartphone,
  type LucideIcon,
} from 'lucide-react'
import type { ServiceKey } from './translations'

export const serviceIcons: Record<ServiceKey, LucideIcon> = {
  webDev: Globe,
  mobileApps: Smartphone,
  customSystems: Settings,
  cybersecurity: Shield,
  cloud: Cloud,
  consulting: Lightbulb,
  support: Headphones,
  hardware: Cpu,
}
