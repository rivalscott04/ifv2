import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHeader({ badge, title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="mb-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Breadcrumb className="mb-4">
          <BreadcrumbList className="flex-wrap gap-y-2">
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="flex items-center gap-1.5 transition-colors hover:text-primary">
                <Link to="/">
                  <Home className="w-4 h-4" />
                  <span className="sr-only">Beranda</span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <ChevronRight className="w-4 h-4 text-muted-foreground/50" />

            {breadcrumbs.map((crumb, index) => (
              <Fragment key={`${crumb.label}-${index}`}>
                <BreadcrumbItem>
                  {crumb.href ? (
                    <BreadcrumbLink asChild className="transition-colors hover:text-primary">
                      <Link to={crumb.href}>{crumb.label}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="font-semibold text-foreground">{crumb.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
                )}
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              {badge}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
