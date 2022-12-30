export const localSave = (key: any, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const localGet = (key: any) => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  }
}

export const localRemove = (key: any) => {
  localStorage.removeItem(key)
}
