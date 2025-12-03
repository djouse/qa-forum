import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Clear existing data
  await prisma.answerAttachment.deleteMany()
  await prisma.questionAttachment.deleteMany()
  await prisma.answer.deleteMany()
  await prisma.questionStateChange.deleteMany()
  await prisma.question.deleteMany()
  await prisma.teacherDiscipline.deleteMany()
  await prisma.discipline.deleteMany()
  await prisma.user.deleteMany()

  // Create Disciplines
  console.log('📚 Creating disciplines...')
  const disciplines = await Promise.all([
    prisma.discipline.create({ data: { name: 'Matemática' } }),
    prisma.discipline.create({ data: { name: 'Português' } }),
    prisma.discipline.create({ data: { name: 'Biologia' } }),
    prisma.discipline.create({ data: { name: 'Física' } }),
    prisma.discipline.create({ data: { name: 'Química' } }),
    prisma.discipline.create({ data: { name: 'História' } }),
    prisma.discipline.create({ data: { name: 'Geografia' } }),
    prisma.discipline.create({ data: { name: 'Inglês' } }),
  ])

  console.log(`✅ Created ${disciplines.length} disciplines`)

  // Create Students
  console.log('👨🎓 Creating students...')
  const students = await Promise.all([
    prisma.user.create({ data: { email: 'jose@student.com', name: 'Jose Dias', role: 'STUDENT' } }),
    prisma.user.create({ data: { email: 'antonio@student.com', name: 'António Guterres', role: 'STUDENT' } }),
    prisma.user.create({ data: { email: 'costa@student.com', name: 'António Costa', role: 'STUDENT' } }),
    prisma.user.create({ data: { email: 'marcelo@student.com', name: 'Marcelo Rebelo de Sousa', role: 'STUDENT' } }),
    prisma.user.create({ data: { email: 'student@student.com', name: 'student', role: 'STUDENT' } }),
  ])

  console.log(`✅ Created ${students.length} students`)

  // Create Teachers
  console.log('👨🏫 Creating teachers...')
  const teachers = await Promise.all([
    prisma.user.create({ data: { email: 'prof.sippin@school.com', name: 'Prof. Sippin Purp', role: 'TEACHER' } }),
    prisma.user.create({ data: { email: 'prof.johny@school.com', name: 'Prof. lon3r johny', role: 'TEACHER' } }),
    prisma.user.create({ data: { email: 'prof.jam@school.com', name: 'Prof. ProfJam', role: 'TEACHER' } }),
    prisma.user.create({ data: { email: 'prof@prof.com', name: 'professor', role: 'TEACHER' } }),
  ])

  console.log(`✅ Created ${teachers.length} teachers`)

  // Assign disciplines to teachers
  console.log('🔗 Assigning disciplines to teachers...')
  await Promise.all([
    // Prof. Sippin teaches Math, Physics, Chemistry, Geography
    prisma.teacherDiscipline.create({ data: { teacherId: teachers[0].id, disciplineId: disciplines[0].id } }),
    prisma.teacherDiscipline.create({ data: { teacherId: teachers[0].id, disciplineId: disciplines[3].id } }),
    prisma.teacherDiscipline.create({ data: { teacherId: teachers[0].id, disciplineId: disciplines[4].id } }),
    prisma.teacherDiscipline.create({ data: { teacherId: teachers[0].id, disciplineId: disciplines[6].id } }),
    // Prof. johny teaches Portuguese, History, English, Geography
    prisma.teacherDiscipline.create({ data: { teacherId: teachers[1].id, disciplineId: disciplines[1].id } }),
    prisma.teacherDiscipline.create({ data: { teacherId: teachers[1].id, disciplineId: disciplines[5].id } }),
    prisma.teacherDiscipline.create({ data: { teacherId: teachers[1].id, disciplineId: disciplines[7].id } }),
    prisma.teacherDiscipline.create({ data: { teacherId: teachers[1].id, disciplineId: disciplines[6].id } }),
    // Prof. ProfJam teaches Biology, Chemistry, Physics, Math
    prisma.teacherDiscipline.create({ data: { teacherId: teachers[2].id, disciplineId: disciplines[2].id } }),
    prisma.teacherDiscipline.create({ data: { teacherId: teachers[2].id, disciplineId: disciplines[4].id } }),
    prisma.teacherDiscipline.create({ data: { teacherId: teachers[2].id, disciplineId: disciplines[3].id } }),
    prisma.teacherDiscipline.create({ data: { teacherId: teachers[2].id, disciplineId: disciplines[0].id } }),
    // Professor teaches all subjects
    ...disciplines.map(d => prisma.teacherDiscipline.create({ data: { teacherId: teachers[3].id, disciplineId: d.id } })),
  ])

  console.log('✅ Assigned disciplines to teachers')

  // Helper function to get random date in the past
  const getRandomPastDate = (daysAgo: number) => {
    const date = new Date()
    date.setDate(date.getDate() - Math.floor(Math.random() * daysAgo))
    return date
  }

  // Create Questions with different dates
  console.log('❓ Creating questions...')
  const questionData = [
    { title: 'Como resolver equações do segundo grau?', content: 'Tenho dificuldade em entender o método de Bhaskara. Alguém pode explicar passo a passo?', gradeYear: 9, state: 'RESOLVED', authorId: students[0].id, disciplineId: disciplines[0].id, createdAt: getRandomPastDate(30) },
    { title: 'Qual a diferença entre mitose e meiose?', content: 'Estou estudando divisão celular e me confundo entre os dois processos. Podem me ajudar?', gradeYear: 10, state: 'RESOLVED', authorId: students[1].id, disciplineId: disciplines[2].id, createdAt: getRandomPastDate(25) },
    { title: 'Como identificar a classe gramatical das palavras?', content: 'Preciso de ajuda para identificar substantivos, adjetivos e verbos em frases complexas.', gradeYear: 8, state: 'RESOLVED', authorId: students[2].id, disciplineId: disciplines[1].id, createdAt: getRandomPastDate(20) },
    { title: 'O que é força gravitacional?', content: 'Não entendo bem o conceito de gravidade. Como ela funciona?', gradeYear: 11, state: 'RESOLVED', authorId: students[3].id, disciplineId: disciplines[3].id, createdAt: getRandomPastDate(15) },
    { title: 'Como balancear equações químicas?', content: 'Tenho muita dificuldade em balancear as equações. Existe alguma técnica?', gradeYear: 10, state: 'RESOLVED', authorId: students[0].id, disciplineId: disciplines[4].id, createdAt: getRandomPastDate(12) },
    { title: 'O que são números primos?', content: 'Como identificar se um número é primo?', gradeYear: 7, state: 'RESOLVED', authorId: students[3].id, disciplineId: disciplines[0].id, createdAt: getRandomPastDate(10) },
    { title: 'Como funciona a fotossíntese?', content: 'Quais são as etapas da fotossíntese nas plantas?', gradeYear: 8, state: 'RESOLVED', authorId: students[0].id, disciplineId: disciplines[2].id, createdAt: getRandomPastDate(8) },
    { title: 'O que são figuras de linguagem?', content: 'Metáfora, metonímia, hipérbole - como identificar?', gradeYear: 9, state: 'RESOLVED', authorId: students[2].id, disciplineId: disciplines[1].id, createdAt: getRandomPastDate(6) },
    { title: 'Como calcular área de círculo?', content: 'Fórmula e exemplos práticos.', gradeYear: 8, state: 'RESOLVED', authorId: students[4].id, disciplineId: disciplines[0].id, createdAt: getRandomPastDate(5) },
    { title: 'O que é energia cinética?', content: 'Diferença para energia potencial.', gradeYear: 10, state: 'RESOLVED', authorId: students[2].id, disciplineId: disciplines[3].id, createdAt: getRandomPastDate(4) },
    { title: 'Como funciona a respiração celular?', content: 'Diferença entre respiração aeróbica e anaeróbica.', gradeYear: 11, state: 'RESOLVED', authorId: students[3].id, disciplineId: disciplines[2].id, createdAt: getRandomPastDate(3) },
    { title: 'O que são ondas sonoras?', content: 'Como se propagam e suas características.', gradeYear: 10, state: 'RESOLVED', authorId: students[4].id, disciplineId: disciplines[3].id, createdAt: getRandomPastDate(4) },
    { title: 'Como identificar ácidos e bases?', content: 'Escala de pH e indicadores.', gradeYear: 9, state: 'RESOLVED', authorId: students[0].id, disciplineId: disciplines[4].id, createdAt: getRandomPastDate(5) },
    { title: 'O que foi a Revolução Industrial?', content: 'Principais mudanças sociais e econômicas.', gradeYear: 8, state: 'RESOLVED', authorId: students[1].id, disciplineId: disciplines[5].id, createdAt: getRandomPastDate(6) },
    { title: 'Quais são os países da União Europeia?', content: 'Preciso saber todos os países membros para o teste.', gradeYear: 9, state: 'ACTIVE', authorId: students[1].id, disciplineId: disciplines[6].id, createdAt: getRandomPastDate(3) },
    { title: 'Como usar o Present Perfect em inglês?', content: 'Não consigo entender quando usar have/has + particípio.', gradeYear: 10, state: 'ACTIVE', authorId: students[2].id, disciplineId: disciplines[7].id, createdAt: getRandomPastDate(2) },
    { title: 'Qual a estrutura de um texto argumentativo?', content: 'Preciso escrever uma dissertação e não sei como organizar.', gradeYear: 11, state: 'ACTIVE', authorId: students[4].id, disciplineId: disciplines[1].id, createdAt: getRandomPastDate(2) },
    { title: 'O que é velocidade e aceleração?', content: 'Qual a diferença entre estes dois conceitos?', gradeYear: 9, state: 'ACTIVE', authorId: students[1].id, disciplineId: disciplines[3].id, createdAt: getRandomPastDate(1) },
    { title: 'Como calcular a massa molar?', content: 'Preciso de ajuda com cálculos estequiométricos.', gradeYear: 11, state: 'ACTIVE', authorId: students[2].id, disciplineId: disciplines[4].id, createdAt: getRandomPastDate(1) },
    { title: 'Quais foram as causas da Primeira Guerra Mundial?', content: 'Estou estudando para o exame e preciso entender os antecedentes.', gradeYear: 12, state: 'ACTIVE', authorId: students[3].id, disciplineId: disciplines[5].id, createdAt: new Date() },
    { title: 'O que são placas tectônicas?', content: 'Como elas se movem e causam terremotos?', gradeYear: 10, state: 'ACTIVE', authorId: students[4].id, disciplineId: disciplines[6].id, createdAt: new Date() },
    { title: 'Como formar o passado simples em inglês?', content: 'Regras para verbos regulares e irregulares.', gradeYear: 8, state: 'ACTIVE', authorId: students[0].id, disciplineId: disciplines[7].id, createdAt: new Date() },
    { title: 'Como resolver sistemas de equações?', content: 'Método da substituição vs eliminação.', gradeYear: 10, state: 'ACTIVE', authorId: students[1].id, disciplineId: disciplines[0].id, createdAt: new Date() },
    { title: 'Como se formam as montanhas?', content: 'Processos geológicos de formação do relevo.', gradeYear: 11, state: 'ACTIVE', authorId: students[2].id, disciplineId: disciplines[6].id, createdAt: new Date() },
    { title: 'Quando usar artigos em inglês?', content: 'A, an, the - regras de uso.', gradeYear: 7, state: 'ACTIVE', authorId: students[3].id, disciplineId: disciplines[7].id, createdAt: new Date() },
    { title: 'Como calcular porcentagem?', content: 'Preciso entender os cálculos básicos de porcentagem.', gradeYear: 8, state: 'ACTIVE', authorId: students[4].id, disciplineId: disciplines[0].id, createdAt: new Date() },
    { title: 'O que são verbos irregulares?', content: 'Como conjugar verbos que não seguem padrão.', gradeYear: 9, state: 'ACTIVE', authorId: students[0].id, disciplineId: disciplines[1].id, createdAt: new Date() },
    { title: 'Como funciona o DNA?', content: 'Estrutura e função do material genético.', gradeYear: 10, state: 'ACTIVE', authorId: students[1].id, disciplineId: disciplines[2].id, createdAt: new Date() }
  ]

  const questions = []
  for (const data of questionData) {
    const question = await prisma.question.create({ data })
    questions.push(question)
  }

  console.log(`✅ Created ${questions.length} questions`)

  // Create answers for resolved questions
  console.log('💬 Creating answers for resolved questions...')
  const resolvedQuestions = questions.filter(q => q.state === 'RESOLVED')
  
  for (const question of resolvedQuestions) {
    const teacher = teachers.find(t => 
      (t.id === teachers[0].id && [disciplines[0].id, disciplines[3].id, disciplines[4].id, disciplines[6].id].includes(question.disciplineId)) ||
      (t.id === teachers[1].id && [disciplines[1].id, disciplines[5].id, disciplines[7].id, disciplines[6].id].includes(question.disciplineId)) ||
      (t.id === teachers[2].id && [disciplines[2].id, disciplines[4].id, disciplines[3].id, disciplines[0].id].includes(question.disciplineId))
    ) || teachers[3]
    
    // Add student answers first (sharing doubts)
    const studentAnswerCount = Math.random() > 0.6 ? 1 : 0
    if (studentAnswerCount > 0) {
      const randomStudent = students[Math.floor(Math.random() * students.length)]
      const studentAnswerDate = new Date(question.createdAt)
      studentAnswerDate.setHours(studentAnswerDate.getHours() + 1)
      
      await prisma.answer.create({
        data: {
          content: `Eu também tenho essa dúvida! Estava justamente procurando sobre "${question.title}". Espero que alguém possa nos ajudar com isso.`,
          questionId: question.id,
          authorId: randomStudent.id,
          createdAt: studentAnswerDate
        }
      })
    }
    
    // Create teacher answers
    const teacherAnswerCount = Math.random() > 0.3 ? 2 : 1
    
    for (let i = 0; i < teacherAnswerCount; i++) {
      const answerDate = new Date(question.createdAt)
      answerDate.setHours(answerDate.getHours() + (studentAnswerCount + i + 1) * 2)
      
      await prisma.answer.create({
        data: {
          content: i === 0 
            ? `Esta é uma resposta detalhada para "${question.title}". Como professor, posso explicar que este conceito é fundamental e requer compreensão dos princípios básicos. Vou detalhar passo a passo...`
            : `Complementando a resposta anterior, gostaria de adicionar alguns pontos importantes sobre "${question.title}". É essencial também considerar os aspectos práticos desta matéria.`,
          questionId: question.id,
          authorId: i === 0 ? teacher.id : (Math.random() > 0.5 ? teacher.id : teachers[Math.floor(Math.random() * teachers.length)].id),
          createdAt: answerDate
        }
      })
    }
    
    // Create state change
    const stateChangeDate = new Date(question.createdAt)
    stateChangeDate.setDate(stateChangeDate.getDate() + 1)
    
    await prisma.questionStateChange.create({
      data: {
        questionId: question.id,
        changedById: teacher.id,
        fromState: 'ACTIVE',
        toState: 'RESOLVED',
        summary: 'Pergunta respondida e resolvida pelo professor.',
        createdAt: stateChangeDate
      }
    })
  }

  // Add student answers to some active questions
  console.log('💭 Adding student answers to active questions...')
  const activeQuestions = questions.filter(q => q.state === 'ACTIVE')
  const questionsToAnswer = activeQuestions.slice(0, 3)
  
  for (const question of questionsToAnswer) {
    const randomStudent = students[Math.floor(Math.random() * students.length)]
    const answerDate = new Date(question.createdAt)
    answerDate.setHours(answerDate.getHours() + Math.floor(Math.random() * 12) + 1)
    
    await prisma.answer.create({
      data: {
        content: `Oi! Eu também estou com essa mesma dúvida sobre "${question.title}". Alguém já conseguiu entender isso? Seria muito útil se pudessem explicar!`,
        questionId: question.id,
        authorId: randomStudent.id,
        createdAt: answerDate
      }
    })
  }

  console.log(`✅ Created answers for ${resolvedQuestions.length} resolved questions`)
  console.log(`✅ Added student answers to ${questionsToAnswer.length} active questions`)
  console.log('🎉 Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })