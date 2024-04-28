export const setSessionStorageObject = (
  key: string,
  value: Record<string, any>
) => {
  const oldSesstionStorage = sessionStorage.getItem(key)

  if (oldSesstionStorage) {
    const oldSesstionStorageObject = JSON.parse(oldSesstionStorage)
    const newSesstionStorageObject = { ...oldSesstionStorageObject, ...value }
    sessionStorage.setItem(key, JSON.stringify(newSesstionStorageObject))
  } else {
    sessionStorage.setItem(key, JSON.stringify(value))
  }
}
