import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    borderColor: 'rgba(91,21,115)',
    borderRadius: '10px',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255)' : 'rgba(30,29,29)',
    color: 'rgba(255,255,255)',
    '&:not(:last-child)': {
      borderBottom: 0,
      color: 'rgba(255,255,255)',
    },
    '&:before': {
      display: 'none',
    },
  })
);

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(30,29,29)',
  borderRadius: '10px',
  borderColor: 'rgba(26,26,26)',
  flexDirection: 'row-reverse',
  
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',           
    color: 'rgba(255,255,255)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    color: 'rgba(175, 92, 204)',
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: 'rgba(255,255,255)',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '2px solid rgba(91,21,115)',
  color: 'rgba(255,255,255)',
}));

export function FaqAccordion() {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Где находится колледж?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Улица Чкалова, 3 (3 этаж)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Какие документы я получу после окончания обучения?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Диплом государственного образца
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Сколько стоит обучение?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Стоимость обучения на 2022-2023 год: 15 000₽ в месяц
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Есть ли бюджетные места в колледже?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          В нашем колледже бюджетных мест нет </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Как оплатить обучение?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Для оплаты обучения вам необходимо перейти на <a href="https://ithub.ru/payment/qiwi"> страницу оплаты.</a> <br/> <strong>Важно! </strong>Оплата образовательных услуг осуществляется ТОЛЬКО по безналичному расчету <br/> Через сервис ВТБ Онлайн, в том числе через приложение. Зайдите в раздел «Платежи и переводы», подраздел «Платежи в регионе Москва» и в строке поиска введите наш ИНН 9709063913, выберите наш колледж АНО ПО «ИТ ХАБ», введите: номер договора, ФИО обучающегося, назначение платежа, ФИО плательщика и сумму платежа. Подтвердите операцию. Готово! <br/> Возможна оплата через Тинькофф Банк! Через личный кабинет, в том числе через мобильное приложение. Зайдите в раздел «Платежи», подраздел «Образование» и в строке поиска введите наш ИНН 9709063913 или название ИТ ХАБ, выберите наш колледж АНО ПО «ИТ ХАБ», введите: номер договора, ФИО обучающегося, назначение платежа, ФИО плательщика и сумму платежа. Подтвердите операцию. Готово!
 </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6-header">
          <Typography>Какие документы нужно предоставить для поступления?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         - Оригинал или ксерокопию документов, удостоверяющих личность, гражданство <br/> - Оригинал или ксерокопию документа об образовании и (или) документа об образовании и о квалификации <br/> - 4 фотографии (3х4) анкета абитуриента (заполняется в приемной комиссии)
</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>Можно ли оплатить учёбу материнским капиталом?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Да, можно. Мы составили <a href="https://ithub.ru/design/images/MatKapital.pdf"> инструкцию, как это сделать</a> 
 </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>Как получить налоговый вычет за обучение?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Действуйте по <a href="https://ithub.ru/design/images/nalogvichet.pdf"> инструкции</a> 
 </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
