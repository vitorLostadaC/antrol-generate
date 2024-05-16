import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { getScopedI18n } from '@/locales/server'

interface FAQProps {
  question: string
  answer: string
  value: string
}

export const FAQ = async () => {
  const t = await getScopedI18n('pages.landing-pages.faq')

  const FAQList: FAQProps[] = [
    {
      question: t('questions.question1.question'),
      answer: t('questions.question1.answer'),
      value: 'item-1'
    },
    {
      question: t('questions.question2.question'),
      answer: t('questions.question2.answer'),
      value: 'item-2'
    },
    {
      question: t('questions.question3.question'),
      answer: t('questions.question3.answer'),
      value: 'item-3'
    },
    {
      question: t('questions.question4.question'),
      answer: t('questions.question4.answer'),
      value: 'item-4'
    }
  ]

  return (
    <section id="faq" className="py-24 sm:py-32">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        {t('title.pt1')}{' '}
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          {t('title.pt2')}
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
        {t('still-have-questions')}{' '}
        <a
          href="mailto:antrolgenerate@gmail.com"
          className="border-primary text-primary transition-all hover:border-b-2"
        >
          {t('contact-us')}
        </a>
      </h3>
    </section>
  )
}
