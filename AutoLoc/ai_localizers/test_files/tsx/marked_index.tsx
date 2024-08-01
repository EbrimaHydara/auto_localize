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
import { SmartphoneDebutBnr } from '@components/include/uservoice/SmartphoneDebutBnr'

const InterviewContainer = styled.div`
  background: ${props => props.theme.colors.monotone97};
  padding: 32px 0 40px;
`
const Uservoice65: NextPage = () => {
  const pagetitle = t('pagetitle')
  const pageHeading = t('pageHeading')
  const directories = [
    { path: '/uservoice/', label: t('directories.label1') },
    { path: '', label: t('directories.label2') },
  ]
  const breadcrumbs = [
    {
      text: t('breadcrumbs.text1'),
      url: '/',
    },
    {
      text: t('breadcrumbs.text2'),
      url: `${directories[0].path}`,
    },
    {
      text: pageHeading,
      url: '',
    },
  ]

  const articleNum = t('articleNum')
  const userName = t('userName1')
  const userName2 = t('userName2')

  type InterviewImg = {
    directory: string
    param: string
    subInterviewUser: string
  }

  const interviewImg: InterviewImg = {
    directory: articleNum,
    param: t('interviewImg.param'), 
    subInterviewUser: t('interviewImg.subInterviewUser'),
  }

  const scrollTrigger = useRef<HTMLDivElement>(null)
  const articleNoNum = Number(articleNum)
  const readMoreInterviewsData = articleData.filter(
    v => v.id === `${articleNoNum - 1}` || v.id === `${articleNoNum - 2}`,
  )

  console.log(interviewImg.directory, t('consoleMessage'))

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description={t('customHead.description')}
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Introduction
            date={t('introduction.date')}
            readTime={t('introduction.readTime')}
            title={pageHeading}
            leadTxt={
              <>
                <p>
                  {t('introduction.p1')}
                </p>

                <p>
                  {t('introduction.p2')}
                </p>
                <p>
                  {t('introduction.p3')}
                </p>
                <p>
                  {t('introduction.p4')}
                </p>
              </>
            }
            imgDirectory={interviewImg.directory}
            imgParam={interviewImg.param}
            userName={userName}
            userBasicInfo={t('userBasicInfo')}
            periodOfUse={t('periodOfUse')}
            dataUseage={t('dataUseage')}
            beforeComapany={t('beforeComapany')}
          />
        </SystemContainer>

        <InterviewContainer className={Utils['Mt-48']}>
          <SystemContainer>
            <Interview
              title={t('interview.title1')}
              subTitle={t('interview.subTitle1')}
              ratId={`uservoice_${articleNum}_scroll-01_title`}
              className={Utils['Mt-8']}
            >
              <Interviewer>
                <p>
                  {t('interviewer.p1')}
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  {t('interviewee.p1')}
                </p>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName2}さん`}
                subInterviewUser={interviewImg.subInterviewUser}
              >
                <p>
                  {t('interviewee.p2')}
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  {t('interviewer.p2')}
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  {t('interviewee.p3')}
                </p>
                <p>
                  <TxtMarker as="em">
                    {t('txtMarker1')}
                  </TxtMarker>
                  {t('note1')}
                </p>
                <TxtCap as="p">
                  {t('txtCap1')}
                </TxtCap>
              </Interviewee>
              <Interviewer>
                <p>
                  {t('interviewer.p3')}
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName2}さん`}
                subInterviewUser={interviewImg.subInterviewUser}
              >
                <p>
                  {t('interviewee.p4')}
                </p>
                <TxtCap as="p">{t('txtCap2')}</TxtCap>
                <p>
                  {t('interviewee.p5')}
                </p>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  {t('interviewee.p6')}
                </p>
                <p>
                  {t('interviewee.p7')}
                </p>
              </Interviewee>
            </Interview>
            <div ref={scrollTrigger} className={Utils['Mt-64']} />

            <Interview
              title={t('interview.title2')}
              subTitle={t('interview.subTitle2')}
              ratId={`uservoice_${articleNum}_scroll-02_title`}
            >
              <Interviewer>
                <p>
                  {t('interviewer.p4')}
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  {t('interviewee.p8')}
                </p>
                <p>
                  {t('interviewee.p9')}
                </p>
                <p>
                  {t('interviewee.p10')}
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  {t('interviewer.p5')}
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  {t('interviewee.p11')}
                </p>
                <p>
                  {t('interviewee.p12')}
                </p>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName2}さん`}
                subInterviewUser={interviewImg.subInterviewUser}
              >
                <p>
                  {t('interviewee.p13')}
                </p>
                <TxtCap as="p">
                  {t('txtCap3')}
                </TxtCap>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  {t('interviewee.p14')}
                </p>
                <p>
                  {t('interviewee.p15')}
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  {t('interviewer.p6')}
                </p>
              </Interviewer>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName}さん`}
              >
                <p>
                  {t('interviewee.p16')}
                </p>
                <p>
                  {t('interviewee.p17')}
                </p>
                <TxtCap as="p">
                  {t('txtCap4')}
                </TxtCap>
              </Interviewee>
              <Interviewee
                imgDirectory={interviewImg.directory}
                imgParam={interviewImg.param}
                name={`${userName2}さん`}
                subInterviewUser={interviewImg.subInterviewUser}
              >
                <p>
                  {t('interviewee.p18')}
                </p>
              </Interviewee>
              <Interviewer>
                <p>
                  {t('interviewer.p7')}
                </p>
              </Interviewer>
            </Interview>
          </SystemContainer>
        </InterviewContainer>

        <SystemContainer>
          <InterviewSummary
            ratId={`uservoice_${articleNum}_scroll-03_close`}
            className={Utils['Mt-32']}
          >
            <p>
              {t('interviewSummary.p1')}
            </p>
            <p>
              {t('interviewSummary.p2')}
            </p>
            <TxtCap as="p">
              {t('interviewSummary.p3')}
            </TxtCap>
          </InterviewSummary>

          <SmartphoneDebutBnr
            className={Utils['Mt-32']}
            param={`?l-id=uservoice_65_guide_kids-ke-tai`}
          />

          <div className={Utils['Mt-32']}>
            <CommonSaikyo lid={`uservoice_${articleNum}_fee_saikyo-plan`} />
          </div>

          <ReadMoreInterviews
            uservoiceList={readMoreInterviewsData.map(v => ({
              title: v.title,
              userInfo: v.profile,
              img: `avator-${v.id}.png`,
              description: v.description,
              href: `/uservoice/${v.id}/?l-id=uservoice_${articleNum}_uservoice_${v.id}`,
            }))}
          />

          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <ReturnUserVoiceList directory={articleNum} />
          </div>

          <SmakatsuBnr className={Utils['Mt-32']} directory={articleNum} />

          <div className={`${Utils['Mt-40']} ${Utils['Pb-24']}`}>
            <BnrCampaignRecommend />
          </div>
        </SystemContainer>

        <CtaBottomFixed scrollTrigger={scrollTrigger} />

        <GlobalFooter
          breadcrumbsItem={breadcrumbs}
          relatedItems={['plan', 'area', 'service']}
        />
      </SystemWrapper>
    </>
  )
}

export default Uservoice65