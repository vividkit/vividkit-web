import { canonicalizeFactBackedInvocation } from '../commands-agentkit-facts.ts';

interface WorkflowStep {
  command?: string;
}

interface WorkflowEntry {
  steps: WorkflowStep[];
}

interface WorkflowContract extends WorkflowEntry {
  id: string;
  category: string;
  level: string;
}

export function createAgentKitWorkflowCatalog<T extends WorkflowEntry>(
  workflows: readonly T[],
  idPrefix: 'engineer' | 'marketing',
) {
  return workflows.map((workflow, index) => ({
    ...workflow,
    id: `${idPrefix}-${index + 1}`,
    steps: workflow.steps.map((step) => (
      step.command
        ? { ...step, command: canonicalizeFactBackedInvocation(step.command) }
        : step
    )),
  }));
}

export function mergeTranslatedWorkflowCatalog<
  TTranslated extends WorkflowEntry,
  TContract extends WorkflowContract,
>(
  translatedWorkflows: readonly TTranslated[],
  contractWorkflows: readonly TContract[],
) {
  return contractWorkflows.map((contract, workflowIndex) => {
    const translated = translatedWorkflows[workflowIndex];
    return {
      ...translated,
      id: contract.id,
      category: contract.category,
      level: contract.level,
      steps: translated.steps.map((step, stepIndex) => {
        const { command: _translatedCommand, ...translatedStep } = step;
        const contractStep = contract.steps[stepIndex];
        return contractStep.command
          ? { ...translatedStep, command: contractStep.command }
          : translatedStep;
      }),
    };
  });
}
