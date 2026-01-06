import { Megaphone, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnnouncementItem } from "@/data/announcementsData";

interface AnnouncementCardProps {
    item: AnnouncementItem;
}

export function AnnouncementCard({ item }: AnnouncementCardProps) {
    return (
        <Card className="group hover:shadow-card-hover transition-all duration-300 border-border bg-card overflow-hidden">
            <CardContent className="p-5">
                <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg shrink-0 ${item.priority ? 'bg-amber/10 text-amber' : 'bg-primary/10 text-primary'}`}>
                        <Megaphone className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1 gap-2">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <Calendar className="w-3.5 h-3.5" />
                                {item.date}
                            </div>
                            {item.priority && (
                                <Badge className="bg-amber text-amber-foreground hover:bg-amber/90 border-none text-[10px] uppercase font-bold px-1.5 py-0">
                                    Penting
                                </Badge>
                            )}
                        </div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-1">
                            {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            {item.content}
                        </p>
                        <Button asChild variant="link" className="p-0 h-auto text-primary text-sm font-medium hover:no-underline group/link">
                            <Link to={`/pengumuman/${item.id}`} className="flex items-center gap-1">
                                Selengkapnya
                                <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
