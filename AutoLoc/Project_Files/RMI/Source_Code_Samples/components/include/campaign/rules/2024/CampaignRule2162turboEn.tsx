import {
  CpnListMark1,
  CpnTitlelv1,
  CpnListMark2Normal,
  CpnListMark2,
  CpnListMark1En,
} from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'

export const CampaignRule2162turboEn = () => {
  return (
    <DescriptionListDefault className={Utils['Mt-32']}>
      <div>
        <dt>Campaign Code</dt>
        <dd>
          <p>2162</p>
          <CpnListMark1>
            <li>
              When inquiring about this campaign, please inform「coupon
              code」stated above
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>Campaign Period</dt>
        <dd>
          <TxtEmp01 as="p">■ Plan's billing start and deadline</TxtEmp01>
          <p className={Utils['Mt-8']}>
            The referred customer clicks on the URL or button in the message
            received and logs in with Rakuten ID
          </p>
          <p className={Utils['Mt-8']}>
            Until 23:59 on the last day of the second month following the day of
            that click and login.
          </p>
        </dd>
      </div>
      <div>
        <dt>Campaign Conditions</dt>
        <dd>
          <TxtEmp01 as="p">
            Rakuten members and employee who fulfil all the conditions in 【1】,
            【2】and【3】 within the time period of each item above.
          </TxtEmp01>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【1】</span>
            Referred customer logs in to campaign URL which referrer has sent
          </CpnTitlelv1>
          <p className={Utils['Mt-8']}>
            (we will now count results and give reward to people who applicated
            Rakuten Mobile logged in referral URL within 7 days. *conditions for
            application after 23rd Jan 2024)
          </p>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【2】</span>
            Apply for both "Rakuten Turbo" and "Rakuten Turbo 5G"
            simultaneously.
          </CpnTitlelv1>
          <p className={Utils['Mt-8']}>
            (We call Rakuten Turbo as plan name and Rakuten Turbo 5G as product)
          </p>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【3】</span>
            Start using "Rakuten Turbo" for 9days (We count as day 1 when people
            applicate or get product)
          </CpnTitlelv1>

          <CpnListMark1En>
            <li>
              The product reception date is the date when the delivery
              completion data is notified to our company or the date when people
              received at the store.
            </li>
            <li className={Utils['Color-primary']}>
              Reward will be given for only once.
            </li>
          </CpnListMark1En>
        </dd>
      </div>
      <div>
        <dt>Campaign Reward</dt>
        <dd>
          <TxtEmp01 as="p">■ Reward Details</TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            7,000 Rakuten Points
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            ■ The Day reward will be Granted
          </TxtEmp01>
          <ul>
            <li>First month of point award: 2,000 points</li>
            <li>
              The month after the first month of point award: 2,000 points
            </li>
            <li>
              Two months after the first month of point award: 3,000 points
            </li>
          </ul>
        </dd>
      </div>
      <div>
        <dt>Campaigns that can be used in conjunction</dt>
        <dd>
          <TxtEmp02 as="p">
            If you fulfill the conditions of the following campaigns before or
            after fulfilling the conditions of this campaign, the following
            campaigns will be given priority.
          </TxtEmp02>
          <CpnListMark2>
            <li>
              <del>
                Rakuten Turbo 1 months free for charging fee (Campaign Code:
                1894)
              </del>
              <CpnListMark1En className={Utils['Mt-0']}>
                <li>
                  The above campaign (Campaign Codes: 1894) ends at 23:59 a.m
                  Tuesday, February 20, 2024.
                </li>
              </CpnListMark1En>
            </li>
            <li>
              Rakuten Turbo 6 months free for charging fee (Campaign Code: 2130)
            </li>
            <li>
              Get 20,000 points for using Rakuten Turbo and Rakuten Mobile
              (Campaign Code: 1895)
            </li>
            <li>
              Get 20,000 points applicating Rakuten Turbo and purchasing of
              eligible genre products at Rakuten Ichiba (Campaign Code: 2038)
            </li>
            <li>
              SPU Award:1,000 Points Gift for the first time application of
              Rakuten Turbo (Campaign Code 1919)
            </li>
            <li>
              【Diamond Member exclusive】1,200 Points Gift for Rakuten Turbo
              application (Campaign Code 1947)
            </li>
            <li>
              Get 1,000 Points using "Start 1000 Rakuten Turbo" for the first
              time (Campaign Code 1950)
            </li>
          </CpnListMark2>
        </dd>
      </div>
      <div>
        <dt>Ineligible Conditions for the Campaign</dt>
        <dd>
          <TxtEmp02 as="p">
            ※ If any of below conditions have been met, then the subject will be
            ineligible for the campaign
          </TxtEmp02>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            ■ About period and conditions of campaign
          </TxtEmp01>
          <CpnListMark1En>
            <li>In case the referred customer cancelled the application</li>
            <li>
              In case the referred customer applies without logging in from the
              referral URL sent by the referrer.
            </li>
            <li>
              In case the referred customer applies without logging in from the
              referral URL within 7 days.
            </li>
            <li>
              In case of the referrer and the referred customer are the same
              person
            </li>
            <li>
              If purchased outside of Rakuten Mobile Shop or Rakuten Mobile
              Online
            </li>
            <li>In case of the referrer is Rakuten employee</li>
            <li>
              In case you indirectly introduced someone-by sharing your coupon
              code or sharing your URL to a third party and in case that
              individual encouraged someone to make a contract
            </li>
            <li>An illegal action is suspected</li>
            <li>
              「Rakuten SAIKYO Plan or Rakuten SAIKYO Plan (Data Type)」 has not
              been used
              <CpnListMark2Normal>
                <li>
                  For procedures for plan usage start, please refer start guide
                  SIM card version or start guide eSIM version
                </li>
              </CpnListMark2Normal>
            </li>
          </CpnListMark1En>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ About non-payment, unpaid amounts, cancellations or withdrawal
          </TxtEmp01>
          <CpnListMark1>
            <li>
              In case the referrer or referred customer fails to make payment
              for our services by the due date, and unpaid has occurred.
            </li>
            <li>
              If referee (your families, friends, acquaintances) quits Rakuten
              mobile with a short term of contraction
            </li>
            <li>
              In case of cancellation of the application due to inadequate
              identification of the subscriber/user, inadequate MNP procedures,
              etc.
            </li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ About determination by our company's regulations and judgement
            criteria
          </TxtEmp01>
          <CpnListMark1>
            <li>
              In case Rakuten ID used for referral login is different from the
              Rakuten ID registered with Rakuten Mobile
            </li>
            <li>
              In case of violation of the terms and conditions set by our
              company or Rakuten Group Co., Ltd.
            </li>
            <li>
              In case of confirmation of violate any terms and conditions of
              Rakuten Group, Inc. or Rakuten Mobile, Inc.
            </li>
            <li>
              In addition to the above, in case Rakuten Mobile,Inc reasonably
              determines that the Member is unqualified to be a Member
            </li>
          </CpnListMark1>
        </dd>
      </div>

      <div>
        <dt>Notes</dt>
        <dd>
          <CpnListMark1>
            <li>
              This campaign is subject to modify, cancellation, or extension
              without notice.
            </li>
            <li>Rights cannot be transferred</li>
            <li>Rakuten Points are rewarded by Rakuten Mobile, Inc.</li>
            <li>
              Rakuten Points may not be awarded when the management deems the
              new application fraudulent, including cases that there is no
              actual usage of the plan.
            </li>
            <li>
              Depending on the nature of the fraud, Rakuten Points may be
              suspended in the future depending on the content of the
              fraudulent.
            </li>
            <li>
              If the fraud is determined after the points are awarded, the
              points may be invalidated, the account may be frozen, or the
              amount equivalent to the points may be charged to the customer's
              account by any means.
            </li>
            <li>
              We may suspend the use of the points in your account after the
              points have been awarded.
            </li>
            <li>
              If you have already used the Points, the amount of the Points
              might be debited from your Rakuten Mobile account by by the
              payment method registered with Rakuten Mobile acocunt.
            </li>
            <li>
              The Campaign may be terminated in the event that any unauthorized
              use or resale of the Points is found, such as transferring the
              Points to other parties not eligible for the Campaign.
            </li>
            <li>
              Please note that we will not be able to respond to any inquiries
              from referrer regarding the personal information(contract status,
              etc.) of referred customer the person being referred.
            </li>
            <li>
              The person who is eligible for this Campaign may be excluded from
              other campaigns being offered at the same time, or the total
              amount of benefits may be limited within the scope of the Act
              against Unjustifiable Premiums and Misleading Representations and
              the Telecommunications Business Act.
            </li>
            <li>
              In case the referred customer is referred by more than one person,
              the referrer with the earliest referral login will be eligible for
              the reward.
            </li>
            <li>
              You can subscribe up to 5 lines with one Rakuten ID. However, with
              this campaign, it is eligible for only one line.
            </li>
            <li>
              Product quantities are limited. The offer may end when we run out.
            </li>
            <li>
              If fraudulent activities such as forwarding to non-eligible
              individuals or unauthorized resale are detected or if our company
              determines any fraudulent activity, the benefits may be
              invalidated for the individuals involved.
            </li>
            <li>
              If the referee change the plan from "Rakuten SAIKYO Plan (Data
              Type)" to "Rakuten SAIKYO Plan", it is not eligible for the
              campaign.
            </li>
            <li>
              The information contained herein is current as of Tuesday, May 21,
              2024.
            </li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
