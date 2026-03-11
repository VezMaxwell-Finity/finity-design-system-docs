/**
 * Finity Design System - Icons
 *
 * To add a new icon:
 * 1. Export your SVG from Figma (24x24, stroke-based)
 * 2. Use createIcon() helper or create a custom component
 * 3. Add it to the appropriate category file (arrows.tsx, general.tsx, feedback.tsx)
 * 4. Export it from this index file
 */

export { createIcon, type IconProps, defaultIconProps } from './Icon';

// Arrow icons
export {
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CaretUp,
  CaretDown,
  CaretLeft,
  CaretRight,
} from './arrows';

// General icons
export {
  Add,
  AddSquare,
  Bank,
  Calendar,
  Check,
  CheckCircle,
  Clock,
  Close,
  Delete,
  Download,
  Edit,
  File,
  Filter,
  Flag,
  Globe,
  Home,
  Help,
  Info,
  Lock,
  Mail,
  Menu,
  Pin,
  Search,
  Settings,
  Star,
  Upload,
  User,
  Users,
  Wallet,
  Warning,
} from './general';

// Feedback/status icons (filled)
export {
  ErrorFilled,
  InfoFilled,
  SuccessFilled,
  WarningFilled,
  CloseFilled,
} from './feedback';
