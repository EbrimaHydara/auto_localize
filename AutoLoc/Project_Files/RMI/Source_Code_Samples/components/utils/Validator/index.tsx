import validator from 'validator'
interface ValidationError {
  condition: (value: string) => boolean
  errorName: keyof ErrorState
}

export type ErrorState = {
  requiredError?: boolean
  kanaError?: boolean
  fullWidthError?: boolean
  otherError?: boolean
  digitError?: boolean
  formatError?: boolean
  matchError?: boolean
  inValid: boolean
}

// validation - type
export const chkRequired = (val: string | undefined) => {
  if (
    typeof val === 'undefined' ||
    validator.isEmpty(val, { ignore_whitespace: true })
  ) {
    return 1
  } else {
    return 0
  }
}
export const chkAlphanumeric = (val: string) => {
  if (validator.isAlphanumeric(val)) {
    return 0
  } else {
    return 1
  }
}
export const chkNumeric = (val: string) => {
  if (validator.isNumeric(val, { no_symbols: true })) {
    return 0
  } else {
    return 1
  }
}
export const chkLength = (val: string, min: number, max: number) => {
  let setting = {
    min: min,
    max: max,
  }
  if (validator.isLength(val, setting)) {
    return 0
  } else {
    return 1
  }
}
export const chkEmail = (val: string) => {
  if (validator.isEmail(val)) {
    return 0
  } else {
    return 1
  }
}
export const chkKatakana = (val: string) => {
  const isZenKatakana = (str: string) => {
    if (str.match(/^[ァ-ヶー]+$/)) {
      return true
    } else {
      return false
    }
  }

  if (isZenKatakana(val)) {
    return 0
  } else {
    return 1
  }
}

export const createValidator =
  (errors: ValidationError[]) =>
  (setErrorState: React.Dispatch<React.SetStateAction<ErrorState>>) =>
  (value: string) => {
    let isValid = true
    setErrorState({
      kanaError: false,
      fullWidthError: false,
      otherError: false,
      requiredError: false,
      digitError: false,
      formatError: false,
      matchError: false,
      inValid: false,
    })

    errors.forEach(({ condition, errorName }) => {
      if (condition(value)) {
        setErrorState(prevState => ({
          ...prevState,
          [errorName]: true,
          inValid: true,
        }))
        isValid = false
      }
    })

    return isValid
  }

export const nameValidation = createValidator([
  {
    condition: value => !value,
    errorName: 'requiredError',
  },
  {
    condition: value => !!value.match(/[ｦ-ﾟ]/),
    errorName: 'kanaError',
  },
  {
    condition: value => !!value.match(/[Ａ-Ｚａ-ｚ]/),
    errorName: 'fullWidthError',
  },
  {
    condition: value =>
      !!value &&
      !validator.isAlphanumeric(value) &&
      !value.match(/^[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]+$/),
    errorName: 'otherError',
  },
])

export const phoneNumberValidation = createValidator([
  {
    condition: value => !value,
    errorName: 'requiredError',
  },
  {
    condition: value => !/^\d+$/.test(value),
    errorName: 'digitError',
  },
  {
    condition: value => !value || (value.length !== 10 && value.length !== 11),
    errorName: 'formatError',
  },
])

export const emailValidation = createValidator([
  {
    condition: value => !value,
    errorName: 'requiredError',
  },
  {
    condition: value => !validator.isEmail(value),
    errorName: 'formatError',
  },
])

export const emailConfirmValidation = (email: string) =>
  createValidator([
    {
      condition: value => !value,
      errorName: 'requiredError',
    },
    {
      condition: value => !validator.isEmail(value),
      errorName: 'formatError',
    },
    {
      condition: value => value !== email,
      errorName: 'matchError',
    },
  ])

export const requiredErrorValidation = createValidator([
  {
    condition: value => !value,
    errorName: 'requiredError',
  },
])

export const inputTextValidation = createValidator([
  {
    condition: value => !value,
    errorName: 'requiredError',
  },
  {
    condition: value => !validator.matches(value, '^[a-zA-Z0-9._-\\s+]*$'),
    errorName: 'matchError',
  },
])

export const callingPhoneNumberValidation = createValidator([
  {
    condition: value => !!value && !/^\d+$/.test(value),
    errorName: 'digitError',
  },
  {
    condition: value => !!value && value.length !== 10 && value.length !== 11,
    errorName: 'formatError',
  },
])
