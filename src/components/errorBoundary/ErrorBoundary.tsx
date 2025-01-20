import Image from 'next/image';
import React, { Component, ReactNode } from 'react';
import styles from '@/style/components/errorBoundary/errorBoundary.module.css'

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  handleReload = () => {
    window.location.reload();
  };

  handleBack = () => {
    window.location.replace('/');
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ hasError: true });
    console.error('Erro encontrado: ', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <h1>Algo deu errado.</h1>
          <Image src="/error-page.svg" alt="Erro" width={200} height={200} />
          <div className={styles.item}>
            <button onClick={this.handleReload} className={styles.btn}>
              Recarregar
            </button>
            <button onClick={this.handleBack} className={styles.btn}>
              Voltar
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
