import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Clear existing data (optional - remove if you want to keep existing data)
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
  console.log('👨‍🎓 Creating students...')
  const students = await Promise.all([
    prisma.user.create({
      data: {
        email: 'alice@student.com',
        name: 'Jose Dias',
        role: 'STUDENT',
      }
    }),
    prisma.user.create({
      data: {
        email: 'bob@student.com',
        name: 'Antóinio Guterres',
        role: 'STUDENT',
      }
    }),
    prisma.user.create({
      data: {
        email: 'charlie@student.com',
        name: 'António Costa',
        role: 'STUDENT',
      }
    }),
    prisma.user.create({
      data: {
        email: 'diana@student.com',
        name: 'Marcelo Rebelo de Sousa',
        role: 'STUDENT',
      }
    }),
    prisma.user.create({
      data: {
        email: 'student@student.com',
        name: 'Student',
        role: 'STUDENT',
      }
    }),
  ])

  console.log(`✅ Created ${students.length} students`)

  // Create Teachers
  console.log('👨‍🏫 Creating teachers...')
  const teachers = await Promise.all([
    prisma.user.create({
      data: {
        email: 'prof.sippin@school.com',
        name: 'Prof. Sippin Purp',
        role: 'TEACHER',
      }
    }),
    prisma.user.create({
      data: {
        email: 'prof.joao@school.com',
        name: 'Prof. lon3r johny',
        role: 'TEACHER',
      }
    }),
    prisma.user.create({
      data: {
        email: 'prof.prof@school.com',
        name: 'Prof. ProfJam',
        role: 'TEACHER',
      }
    }),
    prisma.user.create({
      data: {
        email: 'prof@prof.com',
        name: 'Professor',
        role: 'TEACHER',
      }
    }),
  ])

  console.log(`✅ Created ${teachers.length} teachers`)

  // Assign disciplines to teachers
  console.log('🔗 Assigning disciplines to teachers...')
  await Promise.all([
    // Prof. Maria teaches Math and Physics
    prisma.teacherDiscipline.create({
      data: {
        teacherId: teachers[0].id,
        disciplineId: disciplines[0].id, // Matemática
      }
    }),
    prisma.teacherDiscipline.create({
      data: {
        teacherId: teachers[0].id,
        disciplineId: disciplines[3].id, // Física
      }
    }),
    // Prof. João teaches Portuguese and History
    prisma.teacherDiscipline.create({
      data: {
        teacherId: teachers[1].id,
        disciplineId: disciplines[1].id, // Português
      }
    }),
    prisma.teacherDiscipline.create({
      data: {
        teacherId: teachers[1].id,
        disciplineId: disciplines[5].id, // História
      }
    }),
    // Prof. Ana teaches Biology and Chemistry
    prisma.teacherDiscipline.create({
      data: {
        teacherId: teachers[2].id,
        disciplineId: disciplines[2].id, // Biologia
      }
    }),
    prisma.teacherDiscipline.create({
      data: {
        teacherId: teachers[2].id,
        disciplineId: disciplines[4].id, // Química
      }
    }),
  ])

  console.log('✅ Assigned disciplines to teachers')

  // Create Questions
  console.log('❓ Creating questions...')
  const questionData = [
    { title: 'Como resolver equações do segundo grau?', content: 'Tenho dificuldade em entender o método de Bhaskara. Alguém pode explicar passo a passo?', gradeYear: 9, state: 'ACTIVE', authorId: students[0].id, disciplineId: disciplines[0].id },
    { title: 'Qual a diferença entre mitose e meiose?', content: 'Estou estudando divisão celular e me confundo entre os dois processos. Podem me ajudar?', gradeYear: 10, state: 'ACTIVE', authorId: students[1].id, disciplineId: disciplines[2].id },
    { title: 'Como identificar a classe gramatical das palavras?', content: 'Preciso de ajuda para identificar substantivos, adjetivos e verbos em frases complexas.', gradeYear: 8, state: 'ACTIVE', authorId: students[2].id, disciplineId: disciplines[1].id },
    { title: 'O que é força gravitacional?', content: 'Não entendo bem o conceito de gravidade. Como ela funciona?', gradeYear: 11, state: 'RESOLVED', authorId: students[3].id, disciplineId: disciplines[3].id },
    { title: 'Como balancear equações químicas?', content: 'Tenho muita dificuldade em balancear as equações. Existe alguma técnica?', gradeYear: 10, state: 'ACTIVE', authorId: students[0].id, disciplineId: disciplines[4].id },
    { title: 'Quais são os países da União Europeia?', content: 'Preciso saber todos os países membros para o teste.', gradeYear: 9, state: 'ACTIVE', authorId: students[1].id, disciplineId: disciplines[6].id },
    { title: 'Como usar o Present Perfect em inglês?', content: 'Não consigo entender quando usar have/has + particípio.', gradeYear: 10, state: 'ACTIVE', authorId: students[2].id, disciplineId: disciplines[7].id },
    { title: 'O que são números primos?', content: 'Como identificar se um número é primo?', gradeYear: 7, state: 'ACTIVE', authorId: students[3].id, disciplineId: disciplines[0].id },
    { title: 'Qual a estrutura de um texto argumentativo?', content: 'Preciso escrever uma dissertação e não sei como organizar.', gradeYear: 11, state: 'ACTIVE', authorId: students[4].id, disciplineId: disciplines[1].id },
    { title: 'Como funciona a fotossíntese?', content: 'Quais são as etapas da fotossíntese nas plantas?', gradeYear: 8, state: 'ACTIVE', authorId: students[0].id, disciplineId: disciplines[2].id },
    { title: 'O que é velocidade e aceleração?', content: 'Qual a diferença entre estes dois conceitos?', gradeYear: 9, state: 'ACTIVE', authorId: students[1].id, disciplineId: disciplines[3].id },
    { title: 'Como calcular a massa molar?', content: 'Preciso de ajuda com cálculos estequiométricos.', gradeYear: 11, state: 'ACTIVE', authorId: students[2].id, disciplineId: disciplines[4].id },
    { title: 'Quais foram as causas da Primeira Guerra Mundial?', content: 'Estou estudando para o exame e preciso entender os antecedentes.', gradeYear: 12, state: 'ACTIVE', authorId: students[3].id, disciplineId: disciplines[5].id },
    { title: 'O que são placas tectônicas?', content: 'Como elas se movem e causam terremotos?', gradeYear: 10, state: 'ACTIVE', authorId: students[4].id, disciplineId: disciplines[6].id },
    { title: 'Como formar o passado simples em inglês?', content: 'Regras para verbos regulares e irregulares.', gradeYear: 8, state: 'ACTIVE', authorId: students[0].id, disciplineId: disciplines[7].id },
    { title: 'Como resolver sistemas de equações?', content: 'Método da substituição vs eliminação.', gradeYear: 10, state: 'ACTIVE', authorId: students[1].id, disciplineId: disciplines[0].id },
    { title: 'O que são figuras de linguagem?', content: 'Metáfora, metonímia, hipérbole - como identificar?', gradeYear: 9, state: 'ACTIVE', authorId: students[2].id, disciplineId: disciplines[1].id },
    { title: 'Como funciona a respiração celular?', content: 'Diferença entre respiração aeróbica e anaeróbica.', gradeYear: 11, state: 'ACTIVE', authorId: students[3].id, disciplineId: disciplines[2].id },
    { title: 'O que são ondas sonoras?', content: 'Como se propagam e suas características.', gradeYear: 10, state: 'ACTIVE', authorId: students[4].id, disciplineId: disciplines[3].id },
    { title: 'Como identificar ácidos e bases?', content: 'Escala de pH e indicadores.', gradeYear: 9, state: 'ACTIVE', authorId: students[0].id, disciplineId: disciplines[4].id },
    { title: 'O que foi a Revolução Industrial?', content: 'Principais mudanças sociais e econômicas.', gradeYear: 8, state: 'ACTIVE', authorId: students[1].id, disciplineId: disciplines[5].id },
    { title: 'Como se formam as montanhas?', content: 'Processos geológicos de formação do relevo.', gradeYear: 11, state: 'ACTIVE', authorId: students[2].id, disciplineId: disciplines[6].id },
    { title: 'Quando usar artigos em inglês?', content: 'A, an, the - regras de uso.', gradeYear: 7, state: 'ACTIVE', authorId: students[3].id, disciplineId: disciplines[7].id },
    { title: 'Como calcular área de figuras geométricas?', content: 'Fórmulas para triângulos, círculos, retângulos.', gradeYear: 8, state: 'ACTIVE', authorId: students[4].id, disciplineId: disciplines[0].id },
    { title: 'O que são orações subordinadas?', content: 'Tipos e como identificar na análise sintática.', gradeYear: 10, state: 'ACTIVE', authorId: students[0].id, disciplineId: disciplines[1].id },
    { title: 'Como funciona a digestão?', content: 'Processo digestivo e enzimas envolvidas.', gradeYear: 9, state: 'ACTIVE', authorId: students[1].id, disciplineId: disciplines[2].id },
    { title: 'O que é energia cinética?', content: 'Fórmula e aplicações práticas.', gradeYear: 11, state: 'ACTIVE', authorId: students[2].id, disciplineId: disciplines[3].id },
    { title: 'Como fazer cálculos com mols?', content: 'Conversões entre massa, mols e moléculas.', gradeYear: 10, state: 'ACTIVE', authorId: students[3].id, disciplineId: disciplines[4].id },
    { title: 'Quais foram as consequências da Segunda Guerra?', content: 'Mudanças geopolíticas pós-guerra.', gradeYear: 12, state: 'ACTIVE', authorId: students[4].id, disciplineId: disciplines[5].id },
    { title: 'O que são biomas brasileiros?', content: 'Características da Amazônia, Cerrado, Caatinga.', gradeYear: 7, state: 'ACTIVE', authorId: students[0].id, disciplineId: disciplines[6].id },
    { title: 'Como usar phrasal verbs?', content: 'Verbos com preposições em inglês.', gradeYear: 11, state: 'ACTIVE', authorId: students[1].id, disciplineId: disciplines[7].id },
    { title: 'O que são funções matemáticas?', content: 'Conceito e tipos de funções.', gradeYear: 9, state: 'ACTIVE', authorId: students[2].id, disciplineId: disciplines[0].id },
    { title: 'Como fazer uma resenha crítica?', content: 'Estrutura e elementos essenciais.', gradeYear: 10, state: 'ACTIVE', authorId: students[3].id, disciplineId: disciplines[1].id },
    { title: 'O que é evolução das espécies?', content: 'Teoria de Darwin e seleção natural.', gradeYear: 11, state: 'ACTIVE', authorId: students[4].id, disciplineId: disciplines[2].id },
    { title: 'Como calcular trabalho em física?', content: 'Fórmula W = F × d × cos θ.', gradeYear: 10, state: 'ACTIVE', authorId: students[0].id, disciplineId: disciplines[3].id },
    { title: 'O que são reações de oxirredução?', content: 'Como identificar oxidação e redução.', gradeYear: 11, state: 'ACTIVE', authorId: students[1].id, disciplineId: disciplines[4].id },
    { title: 'Quais são os períodos da História do Brasil?', content: 'Divisão cronológica e principais eventos.', gradeYear: 8, state: 'ACTIVE', authorId: students[2].id, disciplineId: disciplines[5].id },
    { title: 'Como se forma o clima?', content: 'Fatores climáticos e tipos de clima.', gradeYear: 9, state: 'ACTIVE', authorId: students[3].id, disciplineId: disciplines[6].id },
    { title: 'Quando usar will e going to?', content: 'Diferenças entre os futuros em inglês.', gradeYear: 9, state: 'ACTIVE', authorId: students[4].id, disciplineId: disciplines[7].id },
    { title: 'Como resolver inequações?', content: 'Regras e representação gráfica.', gradeYear: 10, state: 'ACTIVE', authorId: students[0].id, disciplineId: disciplines[0].id },
    { title: 'O que são gêneros textuais?', content: 'Diferença entre crônica, conto, romance.', gradeYear: 8, state: 'ACTIVE', authorId: students[1].id, disciplineId: disciplines[1].id },
    { title: 'Como funciona a circulação sanguínea?', content: 'Sistema cardiovascular e tipos de circulação.', gradeYear: 10, state: 'ACTIVE', authorId: students[2].id, disciplineId: disciplines[2].id },
    { title: 'O que são leis de Newton?', content: 'As três leis e suas aplicações.', gradeYear: 9, state: 'ACTIVE', authorId: students[3].id, disciplineId: disciplines[3].id },
    { title: 'Como calcular concentração de soluções?', content: 'Molaridade, molalidade e normalidade.', gradeYear: 11, state: 'ACTIVE', authorId: students[4].id, disciplineId: disciplines[4].id },
    { title: 'O que foi o Renascimento?', content: 'Características culturais e artísticas.', gradeYear: 7, state: 'ACTIVE', authorId: students[0].id, disciplineId: disciplines[5].id },
    { title: 'Como se formam os rios?', content: 'Nascente, curso e foz dos rios.', gradeYear: 8, state: 'ACTIVE', authorId: students[1].id, disciplineId: disciplines[6].id },
    { title: 'Como usar conditional sentences?', content: 'First, second e third conditional.', gradeYear: 11, state: 'ACTIVE', authorId: students[2].id, disciplineId: disciplines[7].id }
  ]

  const questions = []
  for (const data of questionData) {
    const question = await prisma.question.create({ data })
    questions.push(question)
  }

  console.log(`✅ Created ${questions.length} questions`)

  // Create Answers
  console.log('💬 Creating answers...')
  await Promise.all([
    // Answer to question 1
    prisma.answer.create({
      data: {
        content: 'O método de Bhaskara é usado para resolver equações do tipo ax² + bx + c = 0. A fórmula é x = (-b ± √(b² - 4ac)) / 2a. Primeiro, identifique os coeficientes a, b e c, depois substitua na fórmula!',
        questionId: questions[0].id,
        authorId: teachers[0].id, // Prof. Maria (Math teacher)
      }
    }),
    prisma.answer.create({
      data: {
        content: 'Complementando, é importante calcular primeiro o discriminante (Δ = b² - 4ac). Se Δ > 0, há duas raízes reais; se Δ = 0, há uma raiz real; se Δ < 0, não há raízes reais.',
        questionId: questions[0].id,
        authorId: students[2].id, // Student helping
      }
    }),
    // Answer to question 2
    prisma.answer.create({
      data: {
        content: 'Mitose produz 2 células-filhas idênticas à célula-mãe, usada para crescimento e regeneração. Meiose produz 4 células com metade dos cromossomos, usada para formar gametas (reprodução). A principal diferença é o número de divisões: mitose tem 1 divisão, meiose tem 2.',
        questionId: questions[1].id,
        authorId: teachers[2].id, // Prof. Ana (Biology teacher)
      }
    }),
    // Answer to question 3
    prisma.answer.create({
      data: {
        content: 'Uma dica prática: substantivos normalmente vêm após artigos (o, a, um, uma). Adjetivos qualificam substantivos. Verbos indicam ação ou estado. Exemplo: "O menino ALEGRE correu" - menino (substantivo), alegre (adjetivo), correu (verbo).',
        questionId: questions[2].id,
        authorId: teachers[1].id, // Prof. João (Portuguese teacher)
      }
    }),
    // Answer to resolved question 4
    prisma.answer.create({
      data: {
        content: 'A força gravitacional é a atração entre objetos com massa. Newton descobriu que F = G(m1×m2)/r². Quanto maior a massa, maior a força. Quanto maior a distância, menor a força. É por isso que ficamos presos à Terra!',
        questionId: questions[3].id,
        authorId: teachers[0].id, // Prof. Maria (Physics teacher)
      }
    }),
  ])

  console.log('✅ Created answers')

  // Create state change for resolved question
  console.log('📝 Creating state changes...')
  await prisma.questionStateChange.create({
    data: {
      questionId: questions[3].id,
      changedById: students[3].id,
      fromState: 'ACTIVE',
      toState: 'RESOLVED',
      summary: 'Obrigado Prof. Maria! Agora entendi perfeitamente como funciona a gravidade.',
    }
  })

  console.log('✅ Created state changes')

  console.log('🎉 Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })