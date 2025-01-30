trait TradePredicate {}
trait OperationPredicate {}

trait NextRunAdvice {}

enum OperationType {
    TradePredicate,
    OperationPredicate,
    NextRunAdvice,
}

trait CompileTimeData {}

struct CompilationOption {
    oper_type: OperationType,
    qualified_name: String,
}
