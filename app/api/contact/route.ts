import { NextResponse } from 'next/server';

// Declarando a variável global
declare global {
  var submissions: any[];
}

// Inicializando a variável global se ainda não existir
if (!global.submissions) {
  global.submissions = [];
}

export async function GET() {
  try {
    return NextResponse.json(global.submissions);
  } catch (error) {
    console.error('Erro:', error);
    return NextResponse.json(
      { error: 'Erro ao processar dados' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Criar nova submissão com timestamp e ID
    const newSubmission = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...data
    };

    // Adicionar ao array global de submissões
    global.submissions.push(newSubmission);
    
    // Log da nova submissão
    console.log('Nova submissão recebida:', newSubmission);

    return NextResponse.json({ 
      message: 'Dados recebidos com sucesso!',
      data: newSubmission 
    });
  } catch (error) {
    console.error('Erro:', error);
    return NextResponse.json(
      { error: 'Erro ao processar dados' },
      { status: 500 }
    );
  }
} 