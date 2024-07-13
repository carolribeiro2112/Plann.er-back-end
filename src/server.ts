import fastify from "fastify";
import cors from '@fastify/cors'
import {createTrip} from "./routes/create-trip";
import {confirmTrip} from "./routes/confirm-trip";
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { confirmParticipants } from "./routes/confirm-participant";

const app = fastify()

app.register(cors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createTrip)
app.register(confirmTrip)
app.register(confirmParticipants)

app.listen({port: 3333}).then(() => {
  console.log('server running')
})