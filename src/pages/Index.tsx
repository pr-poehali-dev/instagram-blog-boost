import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const blogPosts = [
  {
    id: 1,
    title: "Искусство минимализма в современном дизайне",
    excerpt: "Как создать элегантное пространство, используя принципы минимализма и утончённые акценты.",
    image: "https://cdn.poehali.dev/projects/cc61c05c-efdc-4366-ac7a-946ae04c8d4f/files/0af5d378-f066-49e2-a818-86b68a295a35.jpg",
    category: "Дизайн",
    date: "28 ноября 2025",
    readTime: "5 мин"
  },
  {
    id: 2,
    title: "Секреты эффективного контента для Instagram",
    excerpt: "Проверенные стратегии создания контента, который привлекает и удерживает внимание аудитории.",
    image: "https://cdn.poehali.dev/projects/cc61c05c-efdc-4366-ac7a-946ae04c8d4f/files/407d4b66-379a-4375-848e-165965ea0726.jpg",
    category: "Маркетинг",
    date: "26 ноября 2025",
    readTime: "7 мин"
  },
  {
    id: 3,
    title: "Цветовая палитра сезона",
    excerpt: "Исследуем актуальные цветовые сочетания и их влияние на восприятие бренда.",
    image: "https://cdn.poehali.dev/projects/cc61c05c-efdc-4366-ac7a-946ae04c8d4f/files/4ec3f8f2-bec4-4071-aea2-138b631e9154.jpg",
    category: "Тренды",
    date: "24 ноября 2025",
    readTime: "4 мин"
  }
];

export default function Index() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const handlePostClick = (id: number) => {
    setSelectedPost(id === selectedPost ? null : id);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground tracking-tight">БЛОГ</h1>
          <nav className="flex gap-8">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Главная
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              О блоге
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </a>
          </nav>
        </div>
      </header>

      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/cc61c05c-efdc-4366-ac7a-946ae04c8d4f/files/4ec3f8f2-bec4-4071-aea2-138b631e9154.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-6xl md:text-7xl font-light text-foreground tracking-tight">
              Элегантность в деталях
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Вдохновение, стиль и утончённый подход к созданию контента для вашего Instagram
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <Card 
                key={post.id}
                className="group overflow-hidden border-border/40 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
                onClick={() => handlePostClick(post.id)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm border-0 text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="pt-4">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-4 transition-all">
                      Читать далее
                      <Icon name="ArrowRight" size={16} />
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedPost && (
        <section className="py-20 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card rounded-2xl p-12 shadow-xl">
              <button 
                onClick={() => setSelectedPost(null)}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <Icon name="ArrowLeft" size={20} />
                <span className="text-sm font-medium">Назад к статьям</span>
              </button>
              {blogPosts.filter(p => p.id === selectedPost).map(post => (
                <article key={post.id} className="space-y-8">
                  <div className="space-y-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {post.category}
                    </Badge>
                    <h1 className="text-5xl font-light text-foreground leading-tight">
                      {post.title}
                    </h1>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Icon name="Calendar" size={16} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Icon name="Clock" size={16} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full aspect-video object-cover rounded-xl"
                  />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-6">
                      Это полная статья, которая раскрывает тему более детально. Здесь можно углубиться в нюансы, поделиться личным опытом и дать читателям действительно ценную информацию, которая поможет им развивать свой Instagram-аккаунт.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Важно помнить о балансе между визуальной эстетикой и содержательностью контента. Premium-подход означает внимание к каждой детали — от выбора шрифтов до композиции фотографий.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground">
              © 2025 Блог. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
