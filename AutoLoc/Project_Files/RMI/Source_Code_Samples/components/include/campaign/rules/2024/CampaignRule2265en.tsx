import {
  CpnListMark1,
  CpnTitlelv1,
  CpnListOrderedLv2,
  CpnListMark2Normal,
} from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { LinkNormal } from '@components/atoms/Link'
import { TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'
import styled from 'styled-components'

const WeightNormalPink = styled.li`
  color: ${props => props.theme.colors.primary};
`

type Props = {
  className?: string
}
export const CampaignRule2265en: React.FC<Props> = ({ className }) => {
  return (
    <DescriptionListDefault className={className}>
      <div>
        <dt>Campaign Code</dt>
        <dd>
          <p>2265</p>
          <CpnListMark1>
            <li>
              Please mention the "coupon code" above when inquiring about this
              program.
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>Period</dt>
        <dd>
          <div>
            <TxtEmp01 as="p">■ Entry Period</TxtEmp01>
            Tuesday, March 12, 2024, at 9:00 – End Date TBD
          </div>
        </dd>
      </div>
      <div>
        <dt>Conditions</dt>
        <dd>
          <div>
            <TxtEmp02 as="p">
              Rakuten members eligible for this program must meet conditions
              【1】,【2】,【3】 during the period stated above
            </TxtEmp02>
            <div className={Utils['Mt-16']}>
              <CpnTitlelv1 as="p">
                <span>【1】</span>Subscribers of the "Rakuten SAIKYO Plan"
              </CpnTitlelv1>
              <p className={Utils['Mt-8']}>
                Those who not subscribed to the "Rakuten SAIKYO Plan" at this
                program's outset become eligible upon meeting conditions (i) and
                (ii).
              </p>
              <TxtEmp01 as="p" className={Utils['Mt-16']}>
                (ⅰ)Apply for the "Rakuten SAIKYO Plan" through any of these
                methods (1) - (3)
              </TxtEmp01>
              <CpnListOrderedLv2>
                <li>New application</li>
                <li>Transfer from another carrier（MNP）</li>
                <li>
                  Change plans from a different Rakuten Mobile plan (docomo or
                  au line).
                </li>
              </CpnListOrderedLv2>
              <TxtEmp01 as="p" className={Utils['Mt-16']}>
                (ⅱ)Begin using "Rakuten SAIKYO Plan"
              </TxtEmp01>
              <p className={Utils['Mt-8']}>【Plan Usage Start Date】</p>
              <CpnListMark2Normal>
                <li>
                  For new applications, the start date is the earlier of (1) or
                  (2):
                  <CpnListOrderedLv2>
                    <li>
                      When Rakuten Mobile, Inc., sends a delivery completion
                      notice.
                    </li>
                    <li>
                      When the subscriber can use Rakuten line services (SIM
                      card, eSIM).
                    </li>
                  </CpnListOrderedLv2>
                </li>
                <li>
                  For MNP transfers:
                  <br />
                  The date the subscriber starts using Rakuten line services
                  (SIM card, eSIM).
                </li>
                <li>
                  For plan changes from another Rakuten Mobile plan (docomo or
                  au line):
                  <br />
                  The date the subscriber starts using Rakuten line services
                  (SIM card, eSIM).
                </li>
              </CpnListMark2Normal>
            </div>
            <div className={Utils['Mt-16']}>
              <CpnTitlelv1 as="p">
                <span>【2】</span>
                Registration (Limited to one registration per person)
              </CpnTitlelv1>
              <p>Must register through this page during the entry period.</p>
              <CpnListMark1>
                <li>
                  Registration requires the Rakuten ID of the person 22 years
                  old or under using the "Rakuten SAIKYO Plan."
                </li>
                <li>
                  Eligibility for point awards starts from the registration
                  month (Applicable even if registration precedes plan usage).
                </li>
              </CpnListMark1>
            </div>
            <div className={Utils['Mt-16']}>
              <CpnTitlelv1 as="p">
                <span>【3】</span>The age of 22 or under
              </CpnTitlelv1>
              <p>
                Program covers up until the month before turning 23.
                <br />
                For example, if your 23rd birthday is on March 15, you won't
                qualify for points in March.
              </p>
            </div>
          </div>
        </dd>
      </div>
      <div>
        <dt>Rewards（Rakuten Point）</dt>
        <dd>
          <div>
            <TxtEmp01 as="p">■ Reward Details</TxtEmp01>
            <TxtEmp01 as="p">
              <span>110 points per month</span>
            </TxtEmp01>
            <CpnListMark1>
              <li>Multi-line contracts still receive only 110 points.</li>
              <li>
                Continue receiving benefits as long as eligibility conditions
                are met.
              </li>
            </CpnListMark1>
          </div>
          <div className={Utils['Mt-16']}>
            <TxtEmp01 as="p">■ Point Grant Date</TxtEmp01>
            <TxtEmp01 as="p">
              <span>
                Points are awarded around the last day of the second month after
                confirming 【1】, 【2】 and 【3】.
              </span>
            </TxtEmp01>
            <CpnListMark1>
              <li>
                For example, fulfilling all conditions in March results in
                points awarded by the end of May.
              </li>
              <li>Points are distributed by Rakuten Mobile.</li>
              <li>Rights to points cannot be transferred.</li>
            </CpnListMark1>
          </div>
          <div className={Utils['Mt-16']}>
            <TxtEmp01 as="p">■ Point validity period</TxtEmp01>
            <TxtEmp01 as="p">
              <span>Points are valid for 6 months from the award date.</span>
            </TxtEmp01>
            <CpnListMark1>
              <li>
                For details on limited-time points,
                <LinkNormal
                  href="https://ichiba.faq.rakuten.net/detail/000006532"
                  target="_blank"
                >
                  visit here
                </LinkNormal>
                .
              </li>
              <li>
                Points used before their expiration are non-refundable in case
                of account adjustments or cancellations.
              </li>
            </CpnListMark1>
          </div>
        </dd>
      </div>
      <div>
        <dt>Reward Exclusions</dt>
        <dd>
          <TxtEmp02 as="p">You won't be eligible for rewards if:</TxtEmp02>
          <CpnListMark1>
            <li>Payments for our services are overdue.</li>
            <li>
              Applications are canceled due to insufficient verification of
              identity or MNP procedures.
            </li>
            <li>
              The "Rakuten SAIKYO Plan" is not initiated.(Refer to the SIM or
              eSIM Start Guide for setup instructions.)
            </li>
            <li>Rakuten membership is terminated before receiving points.</li>
            <li>Violations of our company's or Rakuten Group's terms occur.</li>
            <li>
              Our company deems membership eligibility to be violated for any
              reason.
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>Notes</dt>
        <dd>
          <CpnListMark1>
            <li>
              This program is subject to change, cancellation, or extensions
              without prior notice.
            </li>
            <li>
              Participants in this program might not qualify for concurrent
              promotions, or the overall rewards could be restricted under the
              Act against Unjustifiable Premiums and Misleading Representations
              and the Telecommunications Business Act.
            </li>
            <li>
              ※Illegal use, such as transferring to ineligible persons or
              illegal resale, may disqualify you from receiving bonus points.
            </li>
            <WeightNormalPink>
              "Rakuten SAIKYO plan (data type)" is not eligible for this
              program.
            </WeightNormalPink>
            <WeightNormalPink>
              "Apple Watch Family Sharing" is not eligible for this program.
            </WeightNormalPink>
            <li>
              Changing the Rakuten ID associated with your "Rakuten SAIKYO Plan"
              requires re-registration to the program.
            </li>
            <li>Information is accurate as of March 12, 2024.</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
