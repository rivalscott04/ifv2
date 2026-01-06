import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NewsItem } from "@/data/newsData";

interface NewsCardProps {
    item: NewsItem;
}

export function NewsCard({ item }: NewsCardProps) {
    return (
        <Card className="overflow-hidden group hover:shadow-card-hover transition-all duration-300 border-border bg-card">
            <div className="aspect-[16/10] overflow-hidden">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <CardHeader className="p-4 pb-2">
                <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-amber/10 text-amber hover:bg-amber/20 border-none">
                        {item.category}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                    </div>
                </div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                </h3>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.excerpt}
                </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button asChild variant="ghost" size="sm" className="group/btn px-0 hover:bg-transparent text-primary hover:text-primary/80">
                    <Link to={`/berita/${item.id}`} className="flex items-center gap-2">
                        Baca Selengkapnya
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
