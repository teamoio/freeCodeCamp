import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import envData from '../../../../../config/env.json';
import { Link, Spacer } from '../../helpers';

import '../intro.css';

const { forumLocation } = envData;
function IntroDescription(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className='intro-description'>
      <Spacer size='medium' />
      <p className='text-center'>
        <strong>{t('learn.read-this.heading')}</strong>
      </p>
      <Spacer size='medium' />
      <p data-testid='learnReadThisP1'>{t('learn.read-this.p1')}</p>
      <p data-testid='learnReadThisP2'>{t('learn.read-this.p2')}</p>
      <p data-testid='learnReadThisP3'>{t('learn.read-this.p3')}</p>
      <p data-testid='learnReadThisP4'>{t('learn.read-this.p4')}</p>
      <p data-testid='learnReadThisP5'>{t('learn.read-this.p5')}</p>
      <p data-testid='learnReadThisP6'>{t('learn.read-this.p6')}</p>
      <p data-testid='learnReadThisP7'>{t('learn.read-this.p7')}</p>
      <p data-testid='learnReadThisP8'>{t('learn.read-this.p8')}</p>
      <p>
        <Trans i18nKey='learn.read-this.p9'>
          <Link
            data-testid='learnReadThisP9'
            className='inline'
            to='https://youtube.com/freecodecamp'
          />
        </Trans>
      </p>
      <p data-testid='learnReadThisP10'>{t('learn.read-this.p10')}</p>
      <p>
        <Trans i18nKey='learn.read-this.p11'>
          <Link
            data-testid='learnReadThisP11'
            className='inline'
            to={forumLocation}
          />
        </Trans>
      </p>
      <p data-testid='learnReadThisP12'>{t('learn.read-this.p12')}</p>
      <strong data-testid='learnReadThisMiscQuincy'>{t('misc.quincy')}</strong>
    </div>
  );
}

IntroDescription.displayName = 'IntroDescription';

export default IntroDescription;
