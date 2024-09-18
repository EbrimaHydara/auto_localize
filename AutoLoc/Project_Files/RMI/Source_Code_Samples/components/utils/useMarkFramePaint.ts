import { useEffect } from 'react'
import { runAfterFramePaint } from '@components/utils/runAfterFramePaint'
export const useMarkFramePaint = ({
  // markName,
  enabled,
  customCallback,
}: {
  // markName: string
  enabled: boolean
  customCallback: () => void
}) => {
  useEffect(() => {
    /**
     * enableでない場合、runAfterFramePaintを実行せずそのまま抜ける
     */
    if (!enabled) {
      return
    }

    runAfterFramePaint(() => {
      /**
       * performance.markは検証用
       */
      // performance.mark(markName)
      customCallback()
    })
    /**
     * performance.markを実行する場合、依存対象にmarkName追加のこと
     */
  }, [enabled, customCallback])
}
