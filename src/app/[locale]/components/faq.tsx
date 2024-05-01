import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

interface FAQProps {
  question: string
  answer: string
  value: string
}

const FAQList: FAQProps[] = [
  {
    question: 'What is an AI icon generator?',
    answer:
      'Our AI icon generator uses advanced algorithms to help you design custom icons effortlessly. Simply input your preferences, and our tool crafts icons tailored to your needs.',
    value: 'item-1'
  },
  {
    question: 'Is it easy to use for beginners?',
    answer:
      'Absolutely! Our platform is designed with simplicity in mind. No prior design experience is needed—just select your preferences, and our AI will handle the rest.',
    value: 'item-2'
  },
  {
    question: 'Can I use the icons commercially?',
    answer:
      'Yes, all icons created with our generator can be used for both personal and commercial projects. You have full rights to use them in your work.',
    value: 'item-3'
  },
  {
    question: 'How can I get help if I have issues using the tool?',
    answer:
      'Our support team is here to help! Contact us via email for any assistance you may need.',
    value: 'item-4'
  }
]

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        Frequently Asked{' '}
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="AccordionRoot w-full">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="mt-4 text-sm font-medium text-muted-foreground">
        Still have questions?{' '}
        <a
          href="#"
          className="border-primary text-primary transition-all hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  )
}
