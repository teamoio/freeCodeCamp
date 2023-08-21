import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Caret from '../../assets/icons/caret';

const POBOX = (
  <>
    <code>Free Code Camp, Inc.</code>
    <br />
    <code>3905 Hedgcoxe Rd</code>
    <br />
    <code>PO Box 250352</code>
    <br />
    <code>Plano, TX 75025</code>
  </>
);

export const DonationText = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <p data-test-label='donateEfficiencyP1'>{t('donate.efficiency')}</p>
      <p data-test-label='donateWhyDonateP1'>{t('donate.why-donate-1')}</p>
      <p data-test-label='donateWhyDonateP2'>{t('donate.why-donate-2')}</p>
    </>
  );
};

export const DonationOptionsAlertText = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <p data-cy='donate.bigger-donation'>
      <Trans>donate.bigger-donation</Trans>{' '}
      <Trans i18nKey='donate.other-ways'>
        <a data-cy='donate-link' href={t('links:donate.other-ways-url')}>
          placeholder
        </a>
      </Trans>
    </p>
  );
};

const FaqItem = (
  title: string,
  text: JSX.Element,
  key: number
): JSX.Element => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <div className={`faq-item ${isExpanded ? 'open' : ''}`} key={key}>
      <button
        className='map-title'
        onClick={() => setExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <Caret />
        <h3>{title}</h3>
      </button>
      {isExpanded && (
        <>
          <div className='map-challenges-ul'>{text}</div>
        </>
      )}
    </div>
  );
};

export const DonationFaqText = (): JSX.Element => {
  const { t } = useTranslation();
  const faqItems = [
    {
      Q: t('donate.get-help'),
      A: <p data-test-label='donateFaqA1'>{t('donate.forward-receipt')}</p>
    },
    {
      Q: t('donate.how-transparent'),
      A: (
        <>
          <p data-test-label='donateFaqA2P1'>{t('donate.very-transparent')}</p>
          <p>
            <Trans i18nKey='donate.download-irs'>
              <a href={t('links:donate.download-irs-url')}>placeholder</a>
            </Trans>
          </p>
          <p>
            <Trans i18nKey='donate.download-990'>
              <a href={t('links:donate.download-990-url')}>placeholder</a>
            </Trans>
          </p>
        </>
      )
    },
    {
      Q: t('donate.how-efficient'),
      A: (
        <>
          <p data-test-label='donateFaqA3P1'>{t('donate.fcc-budget')}</p>
          <p data-test-label='donateFaqA3P2'>{t('donate.help-millions')}</p>
        </>
      )
    },
    {
      Q: t('donate.how-one-time'),
      A: (
        <>
          <p>
            <Trans i18nKey='donate.one-time'>
              <a href={t('links:donate.one-time-url')}>placeholder</a>
            </Trans>
          </p>
          <p data-test-label='donateFaqA4P2'>{t('donate.wire-transfer')}</p>
        </>
      )
    },
    {
      Q: t('donate.does-crypto'),
      A: (
        <>
          <p data-test-label='donateFaqA5'>{t('donate.yes-cryptocurrency')}</p>
        </>
      )
    },

    {
      Q: t('donate.can-check'),
      A: (
        <>
          <p data-test-label='donateFaqA6'>{t('donate.yes-check')}</p>
          <p>{POBOX}</p>
        </>
      )
    },
    {
      Q: t('donate.how-matching-gift'),
      A: (
        <>
          <p data-test-label='donateFaqA7P1'>{t('donate.employers-vary')}</p>
          <p data-test-label='donateFaqA7P2'>{t('donate.some-volunteer')}</p>
          <p data-test-label='donateFaqA7P3'>
            {t('donate.help-matching-gift')}
          </p>
        </>
      )
    },
    {
      Q: t('donate.how-endowment'),
      A: <p data-test-label='donateFaqA8'>{t('donate.endowment')}</p>
    },
    {
      Q: t('donate.how-legacy'),
      A: (
        <>
          <p data-test-label='donateFaqA9P1'>{t('donate.we-honored')}</p>
          <blockquote>
            <p data-test-label='donateFaqA9P2'>
              {t('donate.legacy-gift-message')}
            </p>
          </blockquote>
          <p data-test-label='donateFaqA9P3'>{t('donate.thank-wikimedia')}</p>
          <p data-test-label='donateFaqA9P4'>
            {t('donate.legacy-gift-questions')}
          </p>
        </>
      )
    },
    {
      Q: t('donate.how-stock'),
      A: <p data-test-label='donateFaqA10'>{t('donate.welcome-stock')}</p>
    },
    {
      Q: t('donate.how-update'),
      A: <p data-test-label='donateFaqA11'>{t('donate.forward-receipt')}</p>
    },
    {
      Q: t('donate.anything-else'),
      A: (
        <>
          <p data-test-label='donateFaqA12'>{t('donate.other-support')}</p>
        </>
      )
    }
  ];

  return (
    <>{faqItems.map((item, iterator) => FaqItem(item.Q, item.A, iterator))}</>
  );
};
