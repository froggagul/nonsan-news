import * as thecamp from 'the-camp-lib';
import key from '../key.json';

export default async function sendMessage(title: string, content: string) {
  // 군인 객체 생성
  const soldier = new thecamp.Soldier(
    '이은서',
    '19990425',
    '20200728',
    '예비군인/훈련병',
    '육군',
    '23사단',
    thecamp.SoldierRelationship.FRIEND,
  );
  console.log(content);
  // 로그인
  const client = new thecamp.Client();
  await client.login(key.ADMIN_ID, key.ADMIN_PW);
  await client.addSoldier(soldier);
  const [trainee] = await client.fetchSoldiers(soldier);
  const message = new thecamp.Message(title, content, trainee);
  // 와! 센드!
  await client.sendMessage(soldier, message);
}