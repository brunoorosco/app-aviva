export function inputName(text) {
  text = text
    .replace(/^( )/g, '')
    .replace(/[\[\].!'@,><|://\\;"\-/&*\()/_+~^´#%¨$`?{ºª°}=0-9]/g, '')
    .replace(/[àèïöñÀÈÏÖÑ]/g, '')

  return text
}

function ip(text) {
  return text.replace(/^([0-9]+(\.|$)){4}/, '')
}

function onlyNumbers(text) {
  return text.replace(/[^\d]/g, '')
}

function phone(text) {
  text = onlyNumbers(text || '').substring(0, 11)
  if (text.length <= 2) {
    return text
  }

  if (text.length <= 6) {
    const part1 = text.substring(0, 2)
    const part2 = text.substring(2, 6)
    return `(${part1}) ${part2}`
  }

  if (text.length <= 10) {
    const part1 = text.substring(0, 2)
    const part2 = text.substring(2, 6)
    const part3 = text.substring(6, 10)
    return `(${part1}) ${part2}-${part3}`
  }

  const part1 = text.substring(0, 2)
  const part2 = text.substring(2, 7)
  const part3 = text.substring(7, 11)
  return `(${part1}) ${part2}-${part3}`
}

export const Masks = {
  onlyNumbers,
  inputName,
  ip,
  phone
}
