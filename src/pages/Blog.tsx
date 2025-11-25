import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { blogPosts, BlogPost } from "@/data/blog";
import { Search, Clock, Calendar, TrendingUp } from "lucide-react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");

  const categories = ["Todas", "Guías", "Noticias", "Consejos", "Parches"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "Todas" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const PostCard = ({ post }: { post: BlogPost }) => (
    <Link to={`/blog/${post.slug}`}>
      <Card className="h-full hover:border-accent/50 transition-all hover:shadow-lg hover:-translate-y-1">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge>{post.category}</Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime} min
            </span>
          </div>
          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
          <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(post.date).toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span>{post.author}</span>
          </div>
          <div className="flex flex-wrap gap-1 mt-3">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
              Blog de LoLAprende
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guías, consejos y noticias para mejorar en League of Legends
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Buscar artículos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && searchQuery === "" && selectedCategory === "Todas" && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-accent" />
                <h2 className="text-2xl font-bold">Artículos Destacados</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          )}

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat}>
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory}>
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <Card className="bg-accent/5 border-accent/20">
                  <CardContent className="py-12 text-center">
                    <Search className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg text-muted-foreground">
                      No se encontraron artículos con esos criterios
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;