
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="text-primary" size={24} />
                  Email
                </CardTitle>
                <CardDescription>Send me an email anytime</CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:ybhavyasaisree@gmail.com" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  ybhavyasaisree@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="text-primary" size={24} />
                  Phone
                </CardTitle>
                <CardDescription>Give me a call</CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:+13468237236" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  (346) 823-7236
                </a>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="text-primary" size={24} />
                  Location
                </CardTitle>
                <CardDescription>Based in</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">Arlington, TX</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full hover-scale">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
