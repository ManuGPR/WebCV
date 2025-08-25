import { Timeline } from "flowbite-react";

const Experiencia = () => {
  return (
    <div className='min-h-[70vh] mt-12'>
      <Timeline className='md:w-1/2 w-[95vw] m-auto'>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>Enero 2023 - Actualidad</Timeline.Time>
            <Timeline.Title>Miembro de la CTS - Delegación EPS</Timeline.Title>
            <Timeline.Body>
              Miembro de la Comisión de Tecnología y Servicios (CTS) de la delegación de la Escuela
              Politécnica Superior de la UC3m. Encargado de ayudar en la programación de los servicios 
              relacionados con la tecnología de la delegación de estudiantes, entre ellos, una página 
              web con una parte de reserva de taquillas integrada.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>Febrero 2025 - Julio 2025</Timeline.Time>
            <Timeline.Title>Empleado en prácticas - Ormazabal</Timeline.Title>
            <Timeline.Body>
              Empleado en prácticas en la empresa Ormazabal. Principalmente ocupado con el desarrollo
              de componentes de una plataforma IoT orientada a la gestión inteligente de un centro de 
              transformación. Aquí obtuve experiencia con tecnologías como MQTT o Docker, y con
              protocolos de comunicación como IEC-104.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>Octubre 2021 - Actualidad</Timeline.Time>
              <Timeline.Title>Delegado de titulación - Delegacion EPS</Timeline.Title>
              <Timeline.Body>
                Delegado de titulación del grado de Ingeniería Informática en la UC3M. Encargado de la
                comunicación entre profesorado y estudiantado, así como la resolución de los problemas que
                surgan entre ellos y su posterior documentación.
              </Timeline.Body>
            </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  )
}

export default Experiencia
