import React, { useEffect } from 'react'

const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void | undefined
) => {
  const handleClickOutside = (e: MouseEvent) => {
    if (ref && ref.current && !ref.current.contains(e.target as Node)) {
      callback()
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })
}

export default useOutsideClick
