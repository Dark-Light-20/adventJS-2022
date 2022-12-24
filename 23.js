function executeCommands(commands) {
  const registers = {
    V00: 0,
    V01: 0,
    V02: 0,
    V03: 0,
    V04: 0,
    V05: 0,
    V06: 0,
    V07: 0,
  };
  const validateValue = (value) => {
    if (value > 255) return value - 256;
    else if (value < 0) return value + 256;
    return value;
  };
  const instructions = {
    MOV: (command, i) => {
      const values = command.slice(4).split(",");
      registers[values[1]] = isNaN(values[0])
        ? registers[values[0]]
        : parseInt(values[0]);
      return i;
    },
    ADD: (command, i) => {
      const operators = command.slice(4).split(",");
      const result = registers[operators[0]] + registers[operators[1]];
      registers[operators[0]] = validateValue(result);
      return i;
    },
    DEC: (command, i) => {
      const decRegister = command.slice(4);
      registers[decRegister] = validateValue(registers[decRegister] - 1);
      return i;
    },
    INC: (command, i) => {
      const incRegister = command.slice(4);
      registers[incRegister] = validateValue(registers[incRegister] + 1);
      return i;
    },
    JMP: (command, i) => {
      return registers.V00 ? parseInt(command.slice(4)) - 1 : i;
    },
  };
  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    const instruction = command.slice(0, 3);
    i = instructions[instruction](command, i);
  }
  return Object.values(registers);
}

const reg1 = executeCommands([
  "MOV 10,V00",
  "DEC V00",
  "INC V01",
  "JMP 1",
  "INC V06",
]);
console.log(reg1);
// Output: [0, 10, 0, 0, 0, 0, 1, 0]
