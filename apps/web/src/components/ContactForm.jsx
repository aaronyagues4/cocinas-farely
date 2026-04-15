
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store in localStorage
      const existingContacts = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      const newContact = {
        ...data,
        id: Date.now(),
        timestamp: new Date().toISOString()
      };
      existingContacts.push(newContact);
      localStorage.setItem('contactSubmissions', JSON.stringify(existingContacts));
      
      toast.success('Mensaje enviado correctamente. Nos pondremos en contacto pronto.');
      reset();
    } catch (error) {
      toast.error('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-sm font-bold text-foreground mb-2 block">
          Nombre completo *
        </Label>
        <Input
          id="name"
          type="text"
          {...register('name', { required: 'El nombre es obligatorio' })}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary transition-all duration-300"
          placeholder="Tu nombre"
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1 font-medium">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-bold text-foreground mb-2 block">
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          {...register('email', { 
            required: 'El email es obligatorio',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email no válido'
            }
          })}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary transition-all duration-300"
          placeholder="tu@email.com"
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1 font-medium">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone" className="text-sm font-bold text-foreground mb-2 block">
          Teléfono *
        </Label>
        <Input
          id="phone"
          type="tel"
          {...register('phone', { 
            required: 'El teléfono es obligatorio',
            minLength: {
              value: 9,
              message: 'El teléfono debe tener al menos 9 dígitos'
            }
          })}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary transition-all duration-300"
          placeholder="+34 912 345 678"
        />
        {errors.phone && (
          <p className="text-sm text-destructive mt-1 font-medium">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="subject" className="text-sm font-bold text-foreground mb-2 block">
          Asunto *
        </Label>
        <Input
          id="subject"
          type="text"
          {...register('subject', { required: 'El asunto es obligatorio' })}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary transition-all duration-300"
          placeholder="¿En qué podemos ayudarte?"
        />
        {errors.subject && (
          <p className="text-sm text-destructive mt-1 font-medium">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-bold text-foreground mb-2 block">
          Mensaje *
        </Label>
        <Textarea
          id="message"
          rows={6}
          {...register('message', { 
            required: 'El mensaje es obligatorio',
            minLength: {
              value: 10,
              message: 'El mensaje debe tener al menos 10 caracteres'
            }
          })}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary transition-all duration-300 resize-none"
          placeholder="Cuéntanos sobre tu proyecto..."
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1 font-medium">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-ambar-claro transition-all duration-300 active:scale-[0.98] font-medium text-lg py-6 rounded-xl shadow-md hover:shadow-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          'Enviar mensaje'
        )}
      </Button>
    </form>
  );
}

export default ContactForm;
