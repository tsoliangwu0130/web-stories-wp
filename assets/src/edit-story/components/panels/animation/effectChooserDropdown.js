/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * External dependencies
 */
import React, { useRef, useState } from 'react';
import propTypes from 'prop-types';
/**
 * Internal dependencies
 */
import { DropDownSelect, DropDownTitle } from '../../form/dropDown';
import { Dropdown as DropdownIcon } from '../../../icons';
import Popup, { Placement } from '../../popup';

export default function EffectChooserDropdown({ children, value }) {
  const selectRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropDownSelect ref={selectRef} onClick={() => setIsOpen(!isOpen)}>
      <DropDownTitle>{value}</DropDownTitle>
      <DropdownIcon />
      <Popup
        anchor={selectRef}
        isOpen={isOpen}
        placement={Placement.BOTTOM_END}
        fillWidth={true}
      >
        {children}
      </Popup>
    </DropDownSelect>
  );
}

EffectChooserDropdown.propTypes = {
  children: propTypes.node.isRequired,
  value: propTypes.string.isRequired,
};
