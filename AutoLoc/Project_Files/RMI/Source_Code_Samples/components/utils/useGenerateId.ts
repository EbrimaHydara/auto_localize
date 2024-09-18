export const useGenerateId = () => {
  const generateId = (): string => {
    const random = Math.random().toString(36).substring(2)
    const now = Date.now().toString(36)

    return random + now
  }

  return {
    generateId,
  }
}
