import {
  Apple, Award, Baby, BarChart, BookOpen, Brain, Briefcase, Building, Building2,
  Calculator, Calendar, Camera, CheckCircle, ChefHat, ClipboardCheck, Cloud, Code,
  Cookie, Database, FileText, Fish, Flame, Gamepad2, Globe, GraduationCap, Hammer,
  Headphones, Heart, Home, Hotel, Languages, Laptop, Leaf, Link, Megaphone,
  Microscope, Monitor, Network, Newspaper, Palette, Palmtree, PenTool, Plane, Rat,
  Rocket, Scale, Scan, School, Share2, Shield, Shirt, Smartphone, Sparkles, Sprout,
  Stethoscope, Sun, Target, TrendingUp, Truck, Users, Video,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Apple, Award, Baby, BarChart, BookOpen, Brain, Briefcase, Building, Building2,
  Calculator, Calendar, Camera, CheckCircle, ChefHat, ClipboardCheck, Cloud, Code,
  Cookie, Database, FileText, Fish, Flame, Gamepad2, Globe, GraduationCap, Hammer,
  Headphones, Heart, Home, Hotel, Languages, Laptop, Leaf, Link, Megaphone,
  Microscope, Monitor, Network, Newspaper, Palette, Palmtree, PenTool, Plane, Rat,
  Rocket, Scale, Scan, School, Share2, Shield, Shirt, Smartphone, Sparkles, Sprout,
  Stethoscope, Sun, Target, TrendingUp, Truck, Users, Video,
};

export function getCourseIcon(name: string): LucideIcon {
  return iconMap[name] ?? BookOpen;
}