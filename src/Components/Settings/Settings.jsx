import React from 'react'
import styled from 'styled-components'
import Adsettings from './Adsettings'
import Adpersonal from './Adpersonal'
import Adpasswordchange from './Adpasswordchange'
import Uniheader from '../SigmUpAndSignIn/Uniheader'

const Settings = () => {
  return (
    <div>
        
      <Contianer>
        <Uniheader />
        <Adsettings />
        <Adpersonal />
        <Adpasswordchange />
        </Contianer>
    </div>
  )
}

export default Settings

const Contianer = styled.div`
  width: 100%;
  /* background-color: gold; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;