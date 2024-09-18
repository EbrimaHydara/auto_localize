import {
  CpnListMark1,
  CpnTitlelv1,
  CpnListOrderedLv2,
  CpnListMark2Normal,
} from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import { LinkNormal } from '@components/atoms/Link'
import Utils from '@styles/Utils.module.scss'

export const CampaignRule2162en = () => {
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
          <p>■ Plan application Period</p>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            5th Dec 2023 (Tue) 9:00 <del>~ 31st May 2024 (Fri) 23:59</del> and
            end date TBD
          </TxtEmp01>
          <p className={Utils['Mt-8']}>■ Plan application and deadline</p>
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
            【2】and【3】 within the time of each item above.
          </TxtEmp01>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【1】</span>
            Referred customer logs in to campaign URL which referrer has sent
            <br />
            (We will now count results and give reward to people who applicated
            Rakuten Mobile logged in referral URL within 7 days. *Conditions for
            application after 23rd Jan 2024)
          </CpnTitlelv1>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【2】</span>
            Referee applies for "Rakuten SAIKYO Plan or Rakuten SAIKYO Plan
            (Data Type)" from one of (1) ～ (3)
          </CpnTitlelv1>
          <CpnListOrderedLv2>
            <li>New application</li>
            <li>
              Apply by switching to Rakuten Mobile from another company with MNP
            </li>
            <li>
              Apply after changing the plan from Rakuten Mobile (docomo line or
              au line).
              <CpnListMark1>
                <li>
                  Referees who have applied for「Rakuten UN-LIMIT VII」before
                  applying for the campaign will not receive the reward
                </li>
                <li>
                  Applications without a referral login from the campaign URL
                  will not be eligible to receive reward.
                </li>
                <li>
                  If the referee change the plan from "Rakuten SAIKYO Plan (Data
                  Type)" to "Rakuten SAIKYO Plan", it is not eligible for the
                  campaign.
                </li>
              </CpnListMark1>
            </li>
          </CpnListOrderedLv2>

          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【3】</span>
            Start using "Rakuten SAIKYO Plan or Rakuten SAIKYO Plan (Data Type)"
          </CpnTitlelv1>
          <p>【Plan usage start date】</p>
          <CpnListMark2Normal>
            <li>
              In case of a new application *The earlier of (1) or (2) will be
              the plan usage start date.
              <CpnListOrderedLv2>
                <li>
                  The date when the delivery completion data is notified to us
                </li>
                <li>
                  The date for when the Rakuten Mobile signal becomes applicable
                  on the SIM card or eSIM
                </li>
              </CpnListOrderedLv2>
            </li>
            <li>
              In case of switching to Rakuten Mobile from another company with
              MNP
            </li>
            <li>
              The date for when the Rakuten Mobile signal becomes applicable on
              the SIM card or eSIM
            </li>
            <li>
              In case of changing the plan from Rakuten Mobile (docomo line or
              au line)
            </li>
          </CpnListMark2Normal>
          <CpnListMark1>
            <TxtEmp02 as="li">
              The rewards are limited to a maximum of 5 lines from 1st June 2024
              (Sat) 0:00 ~
            </TxtEmp02>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>Campaign Reward</dt>
        <dd>
          <TxtEmp02 as="p" className={Utils['Mt-8']}>
            MNP transfer
          </TxtEmp02>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            14,000 Points
          </TxtEmp01>
          <p className={Utils['Mt-8']}>
            First month of point award: 4,000 points
            <br />
            The month after the first month of point award: 5,000 points
            <br />
            Two months after the first month of point award: 5,000 points
          </p>
          <TxtEmp02 as="p" className={Utils['Mt-16']}>
            If you use 6,000 yen discount coupon at the Rakuten Mobile's
            official Rakuten Ichiba shop, you will receive the following
            benefits.
          </TxtEmp02>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            8,000 Points
          </TxtEmp01>
          <p className={Utils['Mt-8']}>
            First month of point award: 2,000 points
            <br />
            The month after the first month of point award: 3,000 points
            <br />
            Two months after the first month of point award: 3,000 points
          </p>
          <TxtEmp02 as="p" className={Utils['Mt-16']}>
            New{' '}
          </TxtEmp02>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            7,000 Points
          </TxtEmp01>
          <p className={Utils['Mt-8']}>
            First month of point award: 2,000 points
            <br />
            The month after the first month of point award: 2,000 points
            <br />
            Two months after the first month of point award: 3,000 points
          </p>
        </dd>
      </div>
      <div>
        <dt>Date of point award</dt>
        <dd>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■Reward Details (Rakuten Point)
          </TxtEmp01>
          <p className={Utils['Mt-8']}>
            Points will be awarded for a period of 3 months from 4 to 6 months
            after the month which the referee logs in.
            <br />
            Example: If the referee's login is confirmed in February, the first
            point will be awarded around the end of June which is four months
            later from the login, the second point will be awarded around the
            end of July, and the third points will be awarded around the end of
            August.
          </p>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■Point validity period
          </TxtEmp01>
          <p className={Utils['Mt-8']}>
            6 months including the date of point award
          </p>
          <CpnListMark1>
            <li>
              <LinkNormal
                href="https://ichiba.faq.rakuten.net/detail/000006532?_ebx=cybb7thuio.1667787152.7uds3s7"
                target="_blank"
                rel="noopener"
              >
                For more details on time-limited points
              </LinkNormal>
            </li>
            <li>
              Points will not be refunded in the event of cancellation or
              modification after the expiration date, even if the points are
              used before the expiration date.
            </li>
            <li>
              <LinkNormal
                href="https://point.rakuten.co.jp/guidance/usemethod/"
                target="_blank"
                rel="noopener"
              >
                The maximum number of points that can be used in a month depends
                on your membership rank. Please check here.
              </LinkNormal>
              <br />
              <LinkNormal
                href="https://point.rakuten.co.jp/en/"
                target="_blank"
                rel="noopener"
              >
                (You can check your membership rank information on the PointClub
                page).
              </LinkNormal>
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>Campaigns that can be used in conjunction</dt>
        <dd>
          <TxtEmp02 as="p">
            The person who is referred (the referred person) can apply the
            following campaigns together. Campaigns other than those listed
            below can not be combined with any other campaigns.
          </TxtEmp02>
          <CpnListMark2Normal>
            <li>
              For orders of set of Android products and Rakuten SAIKYO Plan at
              the official Rakuten Mobile's official Rakuten Ichiba shop, apply
              the 6,000 yen discount coupon (Campaign Code: 1833).
            </li>
            <li>
              For orders of set of Apple products and Rakuten SAIKYO Plan at the
              official Rakuten Mobile's official Rakuten Ichiba shop, apply the
              6,000 yen discount coupon (Campaign Code: 1834).
              <CpnListMark1>
                <li>
                  *If you apply either of the above campaigns and transfer from
                  another carrier (MNP), the rewards of this campaign will be
                  8,000 points.
                </li>
              </CpnListMark1>
            </li>
            <li>
              Points back campaign for subscription of Rakuten SAIKYO Plan and
              purchase an applicable iPhone product with Rakuten Mobile Kaikae
              Chotoku Program (Campaign Code：2231)
            </li>
            <li>
              【Unlimited calls for 15 minutes (standard)】1 months free for
              calling fee (Campaign code: 1977)
            </li>
          </CpnListMark2Normal>
        </dd>
      </div>
      <div>
        <dt>Campaigns that cannot be used in conjuction</dt>
        <dd>
          <TxtEmp01 as="p">
            The following campaigns cannot be used in conjunction with this
            campaign.
          </TxtEmp01>
          <TxtEmp01 as="p">
            If you fulfill the conditions of the following campaigns before or
            after fulfilling the conditions of this campaign, the following
            campaigns will be given priority for each line's application
          </TxtEmp01>
          <CpnListMark2Normal>
            <li>
              Rakuten original products 1 yen campaign.（Campaign Code: 1875）
            </li>
            <li>
              <s>
                【Limited on Android Eligible Products】Special price
                campaign（Campaign Code：2155）
              </s>
              <CpnListMark1>
                <li>
                  The above campaign (Campaign Codes: 2155) ends at 9:59 a.m
                  Tuesday, January 9, 2023.
                </li>
              </CpnListMark1>
            </li>
            <li>
              【Limited on Rakuten Card users】Receive 20,000 Points for your
              first application of Rakuten Mobile (Campaign Code: 2217)
            </li>
            <li>
              【Limited on Android Eligible Products】Special price
              campaign（Campaign Code：2178）
            </li>
          </CpnListMark2Normal>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            The following campaign benefits are{' '}
            <TxtEmp02>not applicable when this campaign is applied.</TxtEmp02>
          </TxtEmp01>
          <CpnListMark2Normal>
            <li>
              【First Time Signup Benefit for the Rakuten SAIKYO Plan】 Receive
              6,000 Points for Switching from Other Mobile-Carriers (Campaign
              Code: 2091)
            </li>
            <li>
              【First Time Signup Benefit for the Rakuten SAIKYO Plan】 Receive
              2,000 Points for New application or Changing the plan (Campaign
              Code: 2142)
            </li>
            <li>
              Applicable iPhone Products Point-Back Campaign (Campaign Code:
              1819)
            </li>
            <li>
              Point rebate campaign with Rakuten SAIKYO Plan + purchase of
              applicable Android products (Campaign Code:2006)
            </li>
          </CpnListMark2Normal>
          <CpnListMark1>
            <li>
              In the case of New application or Application after changing the
              plan from Rakuten Mobile (docomo line or au line), above those 2
              campaigns (Campaign Code:1819, 2006) can be applied together.
            </li>
          </CpnListMark1>
          <CpnListMark2Normal>
            <li>Reward Advertising Campaign. (Campaign code: 1755)</li>
          </CpnListMark2Normal>
          <CpnListMark1>
            <li>
              The person who is eligible for this Campaign may be excluded from
              other campaigns being offered at the same time, or the total
              amount of benefits may be limited within the scope of the Act
              against Unjustifiable Premiums and Misleading Representations and
              the Telecommunications Business Act.
            </li>
            <li>
              There is no campaign that cannot be used in conjunction with
              referrer.
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>Ineligible Conditions for the Campaign</dt>
        <dd>
          <TxtEmp02 as="p">
            * If any of below conditions have been met, then the subject will be
            ineligible for the campaign
          </TxtEmp02>
          <p className={Utils['Mt-8']}>
            ■About period and conditions of campaign
          </p>
          <CpnListMark1>
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
              If purchased outside of Rakuten Mobile Shop, Rakuten Mobile
              Online, or Rakuten Ichiba
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
              <br />
              -For procedures for plan usage start, please refer start guide SIM
              card version or start guide eSIM version
            </li>
          </CpnListMark1>
          <p className={Utils['Mt-16']}>■About legal restrictions</p>
          <CpnListMark1>
            <li>
              If the total benefit amount is restricted within the Act against
              Unjustifiable Premiums and Misleading Representations and the
              Telecommunications Business Act.
            </li>
            <li>
              If the referred person (referred customer) purchases a Wi-Fi
              router simultaneously with the application for the Rakuten SAIKYO
              Plan
            </li>
          </CpnListMark1>
          <p className={Utils['Mt-16']}>
            ■About non-payment, unpaid amounts, cancellations or withdrawal
          </p>
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
          <p className={Utils['Mt-16']}>
            ■About determination by our company's regulations and judgement
            criteria
          </p>
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
