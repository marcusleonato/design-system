/* eslint-env jest */
import React from 'react';
import { Alert } from '../base/example';
import { UtilityIcon } from '../../icons/base/example';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

it('renders a base alert', () =>
  matchesMarkup(
    <Alert type="info">
      <UtilityIcon
        containerClassName="slds-m-right_x-small"
        className="slds-icon_x-small"
        assistiveText={false}
        symbol="user"
      />
      <h2>
        Logged in as John Smith (johnsmith@acme.com).{' '}
        <a href="javascript:void(0);">Log out</a>
      </h2>
    </Alert>
  ));

it('renders a warning alert', () =>
  matchesMarkup(
    <Alert type="warning">
      <UtilityIcon
        containerClassName="slds-m-right_x-small"
        className="slds-icon_x-small"
        assistiveText={false}
        symbol="warning"
      />
      <h2>
        Your browser is outdated. Your Salesforce experience may be degraded.{' '}
        <a href="javascript:void(0);">More Information</a>
      </h2>
    </Alert>
  ));

it('renders a error alert', () =>
  matchesMarkup(
    <Alert type="error">
      <UtilityIcon
        containerClassName="slds-m-right_x-small"
        className="slds-icon_x-small"
        assistiveText={false}
        symbol="error"
      />
      <h2>
        Your browser is currently not supported. Your Salesforce may be
        degraded. <a href="javascript:void(0);">More Information</a>
      </h2>
    </Alert>
  ));

it('renders a offline alert', () =>
  matchesMarkup(
    <Alert type="offline">
      <UtilityIcon
        containerClassName="slds-m-right_x-small"
        className="slds-icon_x-small"
        assistiveText={false}
        symbol="offline"
      />
      <h2>
        You are in offline mode.{' '}
        <a href="javascript:void(0);">More Information</a>
      </h2>
    </Alert>
  ));
