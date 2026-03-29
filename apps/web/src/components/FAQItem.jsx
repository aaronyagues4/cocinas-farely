
import React from 'react';
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

function FAQItem({ question, answer, value }) {
  return (
    <AccordionItem value={value} className="border-b border-border py-2">
      <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 [&[data-state=open]>svg]:text-primary">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-4">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}

export default FAQItem;
