import { AppointmentUpdateManyWithoutAgentsInput } from "./AppointmentUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutAgentsInput;
  department?: "Option1" | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
