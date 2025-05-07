import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { Container, Header } from '../styles'
import { ConnectBox, ConnectItem } from './styles'
import { ArrowRight } from '@phosphor-icons/react'

export default function ConnectCalendar() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>
        <ConnectBox>
          <ConnectItem>
            <Text>Google Calendar</Text>
            <Button variant="secondary">
              Conectar
              <ArrowRight />
            </Button>
          </ConnectItem>

          <Button>
            Próximo passo
            <ArrowRight />
          </Button>
        </ConnectBox>

        <MultiStep size={4} currentStep={2} />
      </Header>
    </Container>
  )
}
