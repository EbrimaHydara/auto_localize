import type { NextPage } from 'next'
import React, { useRef } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { Introduction } from '@components/include/uservoice/Introduction'
import { TxtCap, TxtMarker } from '@components/atoms/Txt'
import { CommonSaikyo } from '@components/include/common/Saikyo'
import { ReadMoreInterviews } from '@components/include/uservoice/ReadMoreInterviews'
import { BnrCampaignRecommend } from '@components/include/common/BnrCampaignRecommend'
import { CtaBottomFixed } from '@components/include/uservoice/CtaBottomFixed'
import { Interview } from '@components/include/uservoice/Interview'
import { Interviewer } from '@components/include/uservoice/Interviewer'
import { Interviewee } from '@components/include/uservoice/Interviewee'
import { SmakatsuBnr } from '@components/include/uservoice/SmakatsuBnr'
import { ReturnUserVoiceList } from '@components/include/uservoice/ReturnUserVoiceList'
import { LinkNormal } from '@components/atoms/Link'
import { InterviewSummary } from '@components/include/uservoice/InterviewSummary'
import { articleData } from '@components/include/uservoice/uservoiceData'
import { TurboBnr } from '@components/include/uservoice/TurboBnr'
import { Heading } from '@components/atoms/Heading'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`

const Uservoice63: NextPage = () => {
  const pagetitle = {t('Rakuten Turbo utilization has made games smoother and more stable than before')}
  const pageHeading = {t('Rakuten Turbo utilization has made games smoother and more stable than before')}
  const directories = [
    { path: '/uservoice/', label: {t('Customer Voice')} },
    { path: '', label: {t('Reviews-Rumors')} },
  ]
  const breadcrumbs = [
    {
      text: {t('Top')},
      url: '/',
    },
    {
      text: `${{t('Customer Voice')}}: Introduction to Rakuten Mobile's Reputation`,
      url: `${directories[0].path}`,
    },
    {
      text: pageHeading,
      url: '',
    },
  ]

  const articleNum = '63'
  const userName = {t('Fukunaga')}

  type InterviewImg = {
    directory: string
    param: string
  }

  const interviewImg: InterviewImg = {
    directory: articleNum,
    param: 'yymmdd', // yymmdd
  }

  const scrollTrigger = useRef<HTMLDivElement>(null)
  const articleNoNum = Number(articleNum)
  const readMoreInterviewsData = articleData.filter(
    v => v.id === `${articleNoNum - 1}` || v.id === `${articleNoNum - 2}`,
  )

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="Rakuten Turbo utilization has made games smoother and more stable than before"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date={t('October 20, 2023')}
            readTime="2"
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  {t('Are you having trouble with sudden disconnection of your apartment optical line or slow optical line?')}
                </p>
                <p>
                  {t('Various disadvantages may occur if the Internet communication speed is slow, but it is particularly stressful when using services such as online games where large numbers of people communicate and video distribution.')}
                </p>
                <p>
                  {t('Mr. Fukunaga, whom we interviewed this time, was struggling because the connection of the optical line in the apartment was unstable, and he could not connect to the Internet suddenly during the game.')}
                </p>
                <p>
                  {t('Then he met home router')}
                  <LinkNormal href="/internet/turbo/?l-id=uservoice_63_internet_turbo">
                    {t('Rakuten Turbo')}
                  </LinkNormal>
                  {t(', and refreshed his home internet environment. Now you can enjoy fast and comfortable internet service.')}
                </p>
                <p>
                  {t('So today, we asked Ms. Fukunaga in detail about the Internet environment and contract stories before and after the change.')}
                </p>
                <TxtCap as="p">
                  {t('Note: The service will be provided fairly, and the speed may decrease. The communication speed is the best effort (maximum speed according to the standard), and the actual speed varies depending on the communication environment and situation.')}
                </TxtCap>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo={t('(Male in his 40s, Osaka Prefecture)')}
            periodOfUse={t('From around June 2023')}
            dataUseage={t('About 5GB/Rakuten Turbo: Over 100GB')}
            beforeComapany="povo"
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title={t('Relax with polite and friendly support!')}
              subTitle={t('Even I, who am not familiar with smartphones, was able to contract successfully while consulting at the store')}
              ratId={`uservoice_${articleNum}_scroll-01_title`}
              className={Utils['Mt-8']}
            >
              <Interviewer>
                <p>
                  {t('Please tell us what prompted you to think about changing to Rakuten Mobile.')}
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}{t('sama')}`}
              >
                <p>
                  {t('The inconvenience I felt when using the previous cell phone company was the trigger.')}
                </p>
                <p>
                  {t('It was a plan where you can only add the amount of data you use, but it was troublesome to charge your data capacity each time. Moreover, the usage fee was not cheaper than I thought by my usage.')}
                </p>
                <p>
                  {t('I decided to change to Rakuten Mobile, which has a low plan fee, as I thought this was not good.')}
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  {t('Did you apply for a change to Rakuten Mobile on the website and in the store?')}
                </p>
              </Interviewer>
                <Interviewee
                  imgDirectory={interviewImg.directory}
                  imgParam={interviewImg.param}
                  name={`${userName}{t('sama')}`}
                >
                  <p>
                    {t('It is a store. I wanted to use the store because I had something to ask before changing. When I actually went to the store, the staff member responded kindly and I asked for a change procedure on the spot.')}
                  </p>
                  <p>
                    {t('It is helpful to have Rakuten Mobile stores nationwide, as some low-cost smart phones have fewer stores, or some plans only apply online and there are no stores in the first place.')}
                  </p>
                </Interviewee>
              <Interviewer>
                <p>
                  {t('I see, you can discuss various things on the spot if it's a store. Did the change procedure end smoothly?')}
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}{t('sama')}`}
              >
                <p>
                  {t('I am not familiar with smartphones, and my contract was completely handled by store staff, from obtaining the MNP (Mobile Phone Number Portability) reservation number to setting up my smartphone, so it took a little time, but the change procedure was done.')}
                </p>
                <p>
                  {t('I ended up asking for a long time,')}
                  <TxtMarker as="em">
                    {t('but the store staff was kind enough to handle it until the procedure was completed.')}
                  </TxtMarker>
                  {t('Thanks to that, I was able to change with confidence, and I am glad that I proceeded with the store.')}
                </p>
                <TxtCap as="p">
                  {t('Note: For details on changing from another company (MNP/ mobile phone number portability),')}
                  <LinkNormal href="/guide/mnp/">
                    {t('click here')}
                  </LinkNormal>.
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  {t('Store support is reassuring when you are worried about changing. What kind of questions did you ask the store staff?')}
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}{t('sama')}`}
              >
                <p>
                  {t('I consulted about the problems with my home optical line. The staff at the store recommended Rakuten Turbo's home router, so I contracted with it together with Rakuten Strongest Plan.')}
                </p>
              </Interviewee>
              <Interviewer>
                <p>{t('What kind of problems occurred with the optical line?')}</p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}{t('sama')}`}
              >
                <p>
                  {t('The condition of my home optical line was such that it would suddenly not connect, the screen would clog up when playing a game, and I could not enjoy it comfortably.')}
                </p>
                <p>
                  {t('It is stressful to accumulate when the optical line is cut off while playing a game, and above all, I was worried about bothering the other party who is playing together.')}
                </p>
                <p>
                  {t('Then, how about trying Rakuten Turbo, which can be used just by plugging it into a power outlet, he recommended. I dared to terminate the optical line I was using and contracted Rakuten Turbo, which helped me out.')}
                </p>
              </Interviewee>
            </Interview>
            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title={t('The communication environment is more stable than before!')}
              subTitle={t('I am enjoying the game with Rakuten Turbo')}
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  {t('How did your communication environment change after you changed your home internet environment to Rakuten Turbo?')}
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}{t('sama')}`}
              >
                <p>
                  {t('The communication environment has improved significantly, with no sudden disconnections or clogging. Because communication isn't cut off,')}
                  <TxtMarker as="em">
                    {t('I can enjoy games and videos comfortably')}
                  </TxtMarker>
                  {t('.')}
                </p>
                <TxtCap as="p">
                  {t('Note: The service will be provided fairly, and the speed may decrease. The communication speed is the best effort (maximum speed according to the standard), and the actual speed varies depending on the communication environment and situation.')}
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  {t('How much has the data communication speed changed compared to the optical line?')}
                </p>
              </Interviewer>
                <Interviewee
                  imgDirectory={interviewImg.directory}
                  imgParam={interviewImg.param}
                  name={`${userName}{t('sama')}`}
                >
                  <p>
                    {t('It doesn't change much from the optical line. I have no complaints about the change in the internet environment than before, and on the contrary, I feel that Rakuten Turbo has improved overwhelmingly. I thought I would introduce it to my acquaintances who have similar troubles with their internet environment.')}
                  </p>
              </Interviewee>
              <Interviewer>
                <p>
                  {t('Thank you very much. Did you know that Rakuten Mobile has a "Rakuten Mobile Referral Campaign" where you can earn Rakuten points for both the introducer and the introduced person? Please use it when introducing.')}
                </p>
                <TxtCap as="p">
                  {t('Note: For more information on the Rakuten Mobile Referral Campaign')}
                  <LinkNormal href="/campaign/referral/">
                    {t('click here')}
                  </LinkNormal>.
                </TxtCap>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}{t('sama')}`}
              >
                <p>
                  {t('I see! If both of us can get Rakuten points, it would be easy to introduce them. I will definitely use it.')}
                </p>
              </Interviewee>
              <Interviewer>