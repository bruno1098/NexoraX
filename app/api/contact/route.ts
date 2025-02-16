import { NextResponse } from 'next/server';

// Array para armazenar submissões (note que isso será resetado a cada deploy)
let submissions: any[] = [];

export async function GET() {
  try {
    return NextResponse.json(submissions);
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

    // Adicionar ao array de submissões
    submissions.push(newSubmission);
    
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