import React from 'react';
import { Calendar, theme } from 'antd';
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const FramCalendar: React.FC = () => {
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: 325,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const disabledDate = (current: Dayjs): boolean => {
    // Disable all dates before today
    return current && current < dayjs().startOf('day');
  };

  return (
    <div style={wrapperStyle}>
      <Calendar 
        fullscreen={false} 
        onPanelChange={onPanelChange} 
        disabledDate={disabledDate} 
      />
    </div>
  );
};

export default FramCalendar;