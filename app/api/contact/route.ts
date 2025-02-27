import { NextResponse } from 'next/server';

// Declarando a variável global
declare global {
  var submissions: any[];
}


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
    
   
    const newSubmission = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...data
    };

    global.submissions.push(newSubmission);
    

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