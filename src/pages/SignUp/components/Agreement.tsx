import { useEffect, useState } from 'react';

import Icon from '@/components/Icon';

const Agreement = () => {
  const [isAllCheck, setIsAllCheck] = useState(false);
  const [isRequiredCheck, setIsRequiredCheck] = useState(false);
  const [isMarketingCheck, setIsMarketingCheck] = useState(false);
  const [buttonColor, setButtonColor] = useState('#999999');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsAllCheck(isRequiredCheck && isMarketingCheck);
    if (isRequiredCheck) {
      setButtonColor('#8B5CF6');
    } else {
      setButtonColor('#999999');
    }
  }, [isRequiredCheck, isMarketingCheck]);

  useEffect(() => {
    setIsButtonDisabled(!isRequiredCheck);
  }, [isRequiredCheck]);

  const handleAllCheck = () => {
    setIsAllCheck(prevState => !prevState);
    setIsRequiredCheck(prevState => !prevState);
    setIsMarketingCheck(prevState => !prevState);
  };

  const handleUseCheck = () => {
    setIsRequiredCheck(prevState => !prevState);
  };

  const handleMarketingCheck = () => {
    setIsMarketingCheck(prevState => !prevState);
  };

  return (
    <div>
      <div className=''>
        <div>
          <input
            type='checkbox'
            id='all-check'
            checked={isAllCheck}
            onChange={handleAllCheck}
            className='hidden'
          />
          <label
            htmlFor='all-check'
            className={`flex cursor-pointer items-center`}
          >
            <div
              className={`w-[20px] ${isAllCheck ? 'text-primary' : 'text-gray-accnet3'}`}
            >
              <Icon id='check-line' />
            </div>
            전체동의
          </label>
        </div>
        <div>
          <input
            type='checkbox'
            id='check1'
            checked={isRequiredCheck}
            onChange={handleUseCheck}
            className='hidden'
          />
          <label
            htmlFor='check1'
            className={`flex cursor-pointer items-center`}
          >
            <div
              className={`w-[20px] ${isRequiredCheck ? 'text-primary' : 'text-gray-accnet3'}`}
            >
              <Icon id='check-line' />
            </div>
            (필수) 보드시그널 약관 및 동의사항
          </label>
        </div>
        <div>
          <input
            type='checkbox'
            id='check2'
            checked={isMarketingCheck}
            onChange={handleMarketingCheck}
            className='hidden'
          />
          <label
            htmlFor='check2'
            className={`flex cursor-pointer items-center`}
          >
            <div
              className={`w-[20px] ${isMarketingCheck ? 'text-primary' : 'text-gray-accnet3'}`}
            >
              <Icon id='check-line' />
            </div>
            (선택) 마케팅 정보 수신 동의
          </label>
        </div>
      </div>
      <button
        type='submit'
        className={`bg-${buttonColor} flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold text-white`}
        style={{ backgroundColor: buttonColor }}
        disabled={isButtonDisabled}
      >
        가입하기
      </button>
    </div>
  );
};

export default Agreement;
