import type { AliasToken, OverrideToken } from 'ant-design-vue/es/theme/interface'

export const globalTokens: Partial<AliasToken> = {
  //   fontFamily: `'Manrope', sans-serif`,
  //   controlOutline: 'var(--primary-200)',
  //   controlOutlineWidth: 1,
  // borderRadius: 200,
  //   colorPrimaryBg: 'var(--primary-50)',
  //   colorPrimaryBgHover: 'var(--primary-100)',
  //   colorPrimaryBorder: 'var(--primary-200)',
  //   colorPrimaryBorderHover: 'var(--primary-300)',
  //   colorPrimaryHover: 'var(--primary-400)',
  // colorPrimary: 'green'
  colorPrimary: 'rgb(239, 83, 102)'
  //   colorPrimaryActive: 'var(--primary-600)',
  //   colorPrimaryTextHover: 'var(--primary-400)',
  //   colorPrimaryText: 'red',
  //   colorPrimaryTextActive: 'var(--primary-600)'
}

export const componentTokens: OverrideToken = {
  Button: {
    borderRadius: 8,
    controlHeight: 36,
    colorPrimary: 'rgb(239, 83, 102)'
  },
  Select: {
    colorPrimary: 'rgb(239, 83, 102)'
  }
}
