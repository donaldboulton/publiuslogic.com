import { useEffect } from 'react'

function useRefEffect({ effect, ref = {} }) {
  useEffect(() => {
    effect(ref.current)
  }, [effect, ref])
}

export default useEffect
