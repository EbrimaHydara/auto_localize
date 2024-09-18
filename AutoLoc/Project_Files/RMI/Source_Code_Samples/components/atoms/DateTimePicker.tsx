import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import DatePicker, { registerLocale } from 'react-datepicker'
import ja from 'date-fns/locale/ja'
import {
  IconCalendarLine,
  IconChevronLeft,
  IconChevronRight,
} from '@components/icons'
import Utils from '@styles/Utils.module.scss'
import 'react-datepicker/dist/react-datepicker.css'
import { Input } from '@components/atoms/Input'

registerLocale('ja', ja)

const DatePickerBtnBase = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => <IconCalendarLine ref={ref} {...props} />)
const DatePickerBtn = styled(DatePickerBtnBase)`
  position: relative !important;
  font-size: 24px !important;
  display: block !important;
  text-align: right !important;
  right: 16px !important;
  margin: -58px 0 0 auto !important;
`
const InputCustomBase = styled(Input)`
  &:focus + ${DatePickerBtn} {
    color: ${props => props.theme.colors.primary};
  }
  + span {
    pointer-events: none;
  }
`
const Wrap = styled.div<{ isSameYearSelected: boolean }>`
  > div:first-child {
    margin-bottom: 16px;
  }
  .react-datepicker-wrapper {
    display: block;
  }
  .react-datepicker {
    font-family: var(--noto-sans-jp), sans-serif;
    color: ${props => props.theme.colors.monotone20};
    background: ${props => props.theme.colors.white};
    border: 1px solid #dbdbdb;
    -webkit-box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
    box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
    border-radius: 4px;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    font-size: 14px;
    z-index: 100;
  }
  .react-datepicker-popper {
    z-index: 5;
  }
  .react-datepicker-popper[data-placement^='top'] {
    padding-bottom: 13px;
  }
  .react-datepicker-popper[data-placement^='bottom'] {
    padding-top: 28px;
    .react-datepicker__triangle {
      &::after {
        border-bottom-color: ${props => props.theme.colors.white};
        left: -246px;
      }
      &::before {
        border-bottom-color: #dbdbdb;
        left: -246px;
      }
    }
  }
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before {
    border-top-color: #dbdbdb;
  }
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::after,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::after {
    left: -246px;
  }
  .react-datepicker__header--custom {
    background: ${props => props.theme.colors.white};
    padding: 0;
    border-bottom: none;
  }
  .react-datepicker__current-month {
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
  }
  .react-datepicker__navigation {
    top: 4px;
    &:hover {
      border-radius: 0.3rem;
      background-color: #f0f0f0;
    }
  }
  .react-datepicker__navigation--next {
    right: 6px;
  }
  .react-datepicker__navigation--previous {
    left: 6px;
  }
  .react-datepicker__navigation-icon::before {
    top: 12px;
    border-color: ${props => props.theme.colors.monotone20};
    border-width: 1px 1px 0 0;
  }
  .react-datepicker__day,
  .react-datepicker__day-name {
    width: 2.2rem;
    line-height: 2.2rem;
    margin: 0;
    &.react-datepicker__day--outside-month {
      color: #dedede;
    }
  }
  .react-datepicker__day--today,
  .react-datepicker__month-text--today {
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.white};
  }
  .react-datepicker__day-name {
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fonts.s};
  }
  .react-datepicker__day--selected,
  .react-datepicker__year-text--selected {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected:hover {
    background-color: ${props =>
      props.isSameYearSelected
        ? props.theme.colors.primary
        : props.theme.colors.white};
    color: ${props =>
      props.isSameYearSelected
        ? props.theme.colors.white
        : props.theme.colors.monotone20};
  }
  .react-datepicker__today-button {
    background-color: ${props => props.theme.colors.white};
    border-top: 1px solid #bfbfbf;
    padding: 8px;
    font-weight: normal;
    &:hover {
      border-radius: 0.3rem;
      background-color: #f0f0f0;
    }
  }
  .react-datepicker__monthPicker,
  .react-datepicker__year {
    height: 170px;
    width: 250px;
  }
  .react-datepicker__month-wrapper {
    display: flex;
    align-items: center;
    height: 25%;
  }
  .react-datepicker__month-text {
    width: 33.33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-datepicker__year {
    max-width: 100%;
  }
  .react-datepicker__year-wrapper {
    max-width: 100%;
    height: 100%;
    width: 100%;
  }
  .react-datepicker__year-text {
    width: 25%;
    height: 33.33%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const CustomDatepickerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 32px;
  padding: 4px;
  border-bottom: 1px solid #bfbfbf;
  & button {
    width: 32px;
  }
  & button[disabled] {
    visibility: hidden;
  }
`

interface InputCustomProps {
  value: string
  onChange: (value: string) => void
  onClick: () => void
  id?: string
  name?: string
  maxLength?: number
  size?: number
}
type CustomHeaderProps = {
  date: Date
  changeYear: (years: number) => void
  decreaseMonth: () => void
  increaseMonth: () => void
  prevMonthButtonDisabled: boolean
  nextMonthButtonDisabled: boolean
  prevYearButtonDisabled: boolean
  nextYearButtonDisabled: boolean
  minYear?: number
  maxYear?: number
}
type HandleSelectProps = {
  selectedView: string
  isHandleClick: boolean
  trigger: boolean
}
const InputCustom = React.forwardRef<HTMLInputElement, InputCustomProps>(
  (props, ref) => {
    const { value, onChange, onClick, id, name, maxLength, size } = props
    return (
      <InputCustomBase
        type="text"
        id={id}
        name={name}
        maxLength={maxLength}
        size={size}
        value={value}
        onChange={e => {
          onChange(e.target.value)
        }}
        onClick={onClick}
        ref={ref}
        className={Utils['Mb-16']}
        readOnly
      />
    )
  },
)

export interface DateTimePickerProps {
  id?: string
  name?: string
  callback?: (value: string | undefined) => void
  startDateCustom?: string
  option?: {
    maxDate?: Date | string
    minDate?: Date | string
    selectedView?: string
  }
  className?: string
}
export const DateTimePicker = React.forwardRef<
  HTMLDivElement,
  DateTimePickerProps
>((props, externalRef) => {
  const { id, name, callback, startDateCustom, option, className } = props
  const [startDate, setStartDate] = useState<Date | null>(
    startDateCustom
      ? startDateCustom === 'today'
        ? new Date()
        : new Date(startDateCustom)
      : null,
  )
  const [isSameYearSelected, setIsSameYearSelected] = useState<boolean>(true)
  const [selectDate, setSelectDate] = useState<number | null>(null)
  const [selectedView, setSelectedView] = useState(
    option?.selectedView ? option.selectedView : 'date',
  )
  const [handleSelectDate, setHandleSelectDate] = useState<HandleSelectProps>({
    selectedView: '',
    isHandleClick: false,
    trigger: false,
  })
  const CustomInput = React.forwardRef((props: any, ref) => {
    return (
      <>
        <InputCustom ref={ref} {...props} />
        <DatePickerBtn />
      </>
    )
  })
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setTimeout(() => {
          setIsOpen(false)
        }, 0)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [inputRef])

  useEffect(() => {
    if (startDate) {
      setIsOpen(false)
    }
  }, [startDate])

  useEffect(() => {
    setIsSameYearSelected(selectDate === startDate?.getFullYear())
  }, [startDate, selectDate, selectedView])

  useEffect(() => {
    if (
      handleSelectDate.selectedView === 'date' &&
      handleSelectDate.isHandleClick
    ) {
      setSelectedView('month')
    } else if (handleSelectDate.selectedView === 'month') {
      handleSelectDate.isHandleClick
        ? setSelectedView('year')
        : setSelectedView('date')
    } else if (
      handleSelectDate.selectedView === 'year' &&
      !handleSelectDate.isHandleClick
    ) {
      setSelectedView('month')
    }
  }, [handleSelectDate])

  const maxDate = option?.maxDate ? new Date(option.maxDate) : new Date()
  const minDate = option?.minDate
    ? new Date(option.minDate)
    : new Date(1900, 0, 1)
  const maxYear = maxDate.getFullYear()
  const minYear = minDate.getFullYear()

  const formatDate = (dt: Date | null) => {
    if (dt) {
      const y = dt.getFullYear()
      const m = ('00' + (dt.getMonth() + 1)).slice(-2)
      const d = ('00' + dt.getDate()).slice(-2)
      return y + '/' + m + '/' + d
    }
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  const inRange = (value: number, min: number, max: number) => {
    return Math.max(Math.min(value, max), min)
  }

  const handleSelect = (date: Date | [Date, Date] | null) => {
    if (date instanceof Date) {
      setSelectDate(date.getFullYear())
    }
    if (date instanceof Date && isToday(date) && callback) {
      setStartDate(date)
      callback(formatDate(date))
      setSelectedView('date')
    } else if (selectedView === 'date' && date instanceof Date && callback) {
      setStartDate(date)
      callback(formatDate(date))
    } else if (selectedView === 'month' || selectedView === 'year') {
      setHandleSelectDate(prevState => ({
        ...prevState,
        selectedView: selectedView,
        isHandleClick: false,
        trigger: !prevState.trigger,
      }))
    }
  }

  const handleInputClick = () => {
    setIsOpen(true)
  }

  const CustomHeader: React.FC<CustomHeaderProps> = ({
    date,
    changeYear,
    decreaseMonth,
    increaseMonth,
    minYear,
    maxYear,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
    prevYearButtonDisabled,
    nextYearButtonDisabled,
  }) => {
    const handleYearChange = (increment: boolean, event: React.MouseEvent) => {
      event.preventDefault()
      if (['year', 'month'].includes(selectedView)) {
        let newYear = date.getFullYear() + (increment ? 10 : -10)
        if (selectedView === 'month') {
          newYear = date.getFullYear() + (increment ? 1 : -1)
        }
        setSelectDate(newYear)
        changeYear(
          inRange(
            newYear,
            minYear || 1900,
            maxYear || new Date().getFullYear(),
          ),
        )
      } else {
        increment ? increaseMonth() : decreaseMonth()
      }
    }

    const handleClick = () => {
      if (startDate) {
        setSelectDate(startDate.getFullYear())
      }
      setHandleSelectDate(prevState => ({
        ...prevState,
        selectedView: selectedView,
        isHandleClick: true,
        trigger: !prevState.trigger,
      }))
    }

    const handleDecrease = (event: React.MouseEvent) => {
      handleYearChange(false, event)
    }

    const handleIncrease = (event: React.MouseEvent) => {
      handleYearChange(true, event)
    }

    const renderYearTitle = () => {
      const startYear = Math.floor((date.getFullYear() - 1) / 10) * 10 + 1
      const endYear = startYear + 9
      return `${startYear}年 - ${endYear}年`
    }

    const isPrevMonthButtonDisabled = () => {
      if (selectedView === 'year') {
        return (
          date.getFullYear() <
          Math.floor((minDate.getFullYear() + 9) / 10) * 10 + 1
        )
      } else if (selectedView === 'month') {
        return prevYearButtonDisabled
      } else {
        return prevMonthButtonDisabled
      }
    }
    const isNextMonthButtonDisabled = () => {
      if (selectedView === 'year') {
        return (
          date.getFullYear() >=
          Math.floor((maxDate.getFullYear() - 1) / 10) * 10 + 1
        )
      } else if (selectedView === 'month') {
        return nextYearButtonDisabled
      } else {
        return nextMonthButtonDisabled
      }
    }

    return (
      <CustomDatepickerHeader>
        <button onClick={handleDecrease} disabled={isPrevMonthButtonDisabled()}>
          <IconChevronLeft />
        </button>
        <div className="react-datepicker__current-month" onClick={handleClick}>
          {selectedView === 'year'
            ? renderYearTitle()
            : selectedView === 'month'
            ? date.toLocaleString('ja', { year: 'numeric' })
            : date.toLocaleString('ja', { year: 'numeric', month: 'long' })}
        </div>
        <button onClick={handleIncrease} disabled={isNextMonthButtonDisabled()}>
          <IconChevronRight />
        </button>
      </CustomDatepickerHeader>
    )
  }

  return (
    <Wrap
      ref={inputRef}
      onClick={handleInputClick}
      isSameYearSelected={isSameYearSelected}
      className={className}
    >
      <DatePicker
        {...option}
        readOnly
        selected={startDate}
        open={isOpen}
        locale="ja"
        disabledKeyboardNavigation
        dateFormat="yyyy/MM/dd"
        dateFormatCalendar="yyyy年 MMM"
        showMonthYearPicker={selectedView === 'month'}
        showYearPicker={selectedView === 'year'}
        yearItemNumber={10}
        onChange={() => {}}
        onSelect={date => {
          handleSelect(date)
        }}
        shouldCloseOnSelect={true}
        todayButton="今日"
        minDate={minDate}
        maxDate={maxDate}
        renderCustomHeader={props => (
          <CustomHeader
            {...props}
            minYear={minYear || 1900}
            maxYear={maxYear || new Date().getFullYear()}
          />
        )}
        id={id}
        name={name}
        customInput={<CustomInput ref={externalRef} />}
      />
    </Wrap>
  )
})
