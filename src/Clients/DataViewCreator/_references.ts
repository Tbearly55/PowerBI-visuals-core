// Typedefs
/// <reference path="./typedefs/typedefs.ts" />

// VisualsContracts
/// <reference path="../VisualsContracts/data/dataView.d.ts" />
/// <reference path="../VisualsContracts/data/dataViewObject.d.ts" />
/// <reference path="../VisualsContracts/data/semanticQuery.d.ts" />
/// <reference path="../VisualsContracts/data/sortDirection.d.ts" />
/// <reference path="../VisualsContracts/data/dataViewScopeIdentity.d.ts" />
/// <reference path="../VisualsContracts/data/displayNameGetter.d.ts" />
/// <reference path="../VisualsContracts/data/dataViewObjectDescriptor.d.ts" />
/// <reference path="../VisualsContracts/data/dataViewMapping.d.ts" />
/// <reference path="../VisualsContracts/data/dataViewScopeWildcard.d.ts" />
/// <reference path="../VisualsContracts/data/dataViewRoleWildcard.d.ts" />
/// <reference path="../VisualsContracts/data/compiledDataViewMapping.d.ts" />
/// <reference path="../VisualsContracts/data/selector.d.ts" />
/// <reference path="../VisualsContracts/data/dataViewMapping.d.ts" />
/// <reference path="../VisualsContracts/data/scriptQuery.d.ts" />
/// <reference path="../VisualsContracts/data/visualDataRole.d.ts" />
/// <reference path="../VisualsContracts/types/fillRule.d.ts" />
/// <reference path="../VisualsContracts/types/valueType.d.ts" />
/// <reference path="../VisualsContracts/types/enumType.d.ts" />
/// <reference path="../VisualsContracts/types/structuralType.d.ts" />
/// <reference path="../VisualsContracts/types/defaultValue.d.ts" />
/// <reference path="../VisualsContracts/types/image.d.ts" />
/// <reference path="../VisualsContracts/types/fill.d.ts" />
/// <reference path="../VisualsContracts/types/paragraphs.d.ts" />
/// <reference path="../VisualsContracts/types/filter.d.ts" />
/// <reference path="../VisualsContracts/common/IStringResourceProvider.d.ts" />
/// <reference path="../VisualsContracts/common/enums.ts" />
/// <reference path="../VisualsContracts/common/promise.d.ts" />

// VisualsCommon
/// <reference path="../VisualsCommon/debug.ts" />
/// <reference path="../VisualsCommon/Utility/Utility.ts" />
/// <reference path="../VisualsCommon/Utility/StandaloneUtility.ts" />
/// <reference path="../VisualsCommon/arrayExtensions.ts" />
/// <reference path="../VisualsCommon/Double.ts" />
/// <reference path="../VisualsCommon/Lazy.ts" />
/// <reference path="../VisualsCommon/Errors.ts" />
/// <reference path="../VisualsCommon/Prototype.ts" />
/// <reference path="../VisualsCommon/CssConstants.ts" />
/// <reference path="../VisualsCommon/tracing/traceItem.ts" />
/// <reference path="../VisualsCommon/tracing/trace.ts" />
/// <reference path="../VisualsCommon/tracing/traceType.ts" />
/// <reference path="../VisualsCommon/clientError.ts" />
/// <reference path="../VisualsCommon/serviceError.ts" />
/// <reference path="../VisualsCommon/ScriptErrorInfo.ts" />
/// <reference path="../VisualsCommon/Formatting.ts" />

// VisualsData
/// <reference path="../VisualsData/iFormattingService.ts" />
/// <reference path="../VisualsData/types/enumType.ts" />
/// <reference path="../VisualsData/types/valueType.ts" />
/// <reference path="../VisualsData/types/fillRule.ts" />
/// <reference path="../VisualsData/types/fill.ts" />
/// <reference path="../VisualsData/types/image.ts" />
/// <reference path="../VisualsData/types/paragraphs.ts" />
/// <reference path="../VisualsData/types/structuralType.ts" />
/// <reference path="../VisualsData/dataView/dataViewBuilder.ts" />
/// <reference path="../VisualsData/dataView/dataViewScopeIdentity.ts" />
/// <reference path="../VisualsData/dataView/dataViewTransform.ts" />
/// <reference path="../VisualsData/dataView/colorAllocator.ts" />
/// <reference path="../VisualsData/dataView/dataViewSelectTransform.ts" />
/// <reference path="../VisualsData/dataView/dataViewAnalysis.ts" />
/// <reference path="../VisualsData/dataView/dataViewMappingVisitor.ts" />
/// <reference path="../VisualsData/dataView/dataViewObjectDefinition.ts" />
/// <reference path="../VisualsData/dataView/scriptResultUtil.ts" />
/// <reference path="../VisualsData/dataView/dataViewScopeWildcard.ts" />
/// <reference path="../VisualsData/dataView/dataViewCategoricalProjectionOrder.ts" />
/// <reference path="../VisualsData/dataView/dataViewRoleWildcard.ts" />
/// <reference path="../VisualsData/dataView/dataViewObject.ts" />
/// <reference path="../VisualsData/dataView/dataViewObjectDescriptor.ts" />
/// <reference path="../VisualsData/dataView/dataViewConcatenateCategoricalColumns.ts" />
/// <reference path="../VisualsData/dataView/dataViewPivotMatrix.ts" />
/// <reference path="../VisualsData/dataView/dataViewCategoricalEvalGrouped.ts" />
/// <reference path="../VisualsData/dataView/dataViewNormalizeValues.ts" />
/// <reference path="../VisualsData/dataView/dataViewSelfCrossJoin.ts" />
/// <reference path="../VisualsData/dataView/dataViewPivotCategorical.ts" />
/// <reference path="../VisualsData/dataView/dataViewMatrixProjectionOrder.ts" />
/// <reference path="../VisualsData/dataView/dataViewObjectEvaluator.ts" />
/// <reference path="../VisualsData/dataView/dataViewObjectEvaluationUtils.ts" />
/// <reference path="../VisualsData/dataView/dataViewRegression.ts" />
/// <reference path="../VisualsData/dataView/dataViewPivotCategoricalToPrimaryGroups.ts" />
/// <reference path="../VisualsData/dataView/rules/evalContext.ts" />
/// <reference path="../VisualsData/dataView/rules/ruleEvaluation.ts" />
/// <reference path="../VisualsData/dataView/rules/staticEvalContext.ts" />
/// <reference path="../VisualsData/dataView/rules/matrixEvalContext.ts" />
/// <reference path="../VisualsData/dataView/rules/colorRuleEvaluation.ts" />
/// <reference path="../VisualsData/dataView/rules/colorAllocatorCache.ts" />
/// <reference path="../VisualsData/dataView/rules/categoricalEvalContext.ts" />
/// <reference path="../VisualsData/dataView/rules/tableEvalContext.ts" />
/// <reference path="../VisualsData/dataView/utils/dataViewMatrixUtils.ts" />
/// <reference path="../VisualsData/dataView/utils/dataViewMetadataColumnUtils.ts" />
/// <reference path="../VisualsData/semanticQuery/primitiveValueEncoding.ts" />
/// <reference path="../VisualsData/semanticQuery/sqExpr.ts" />
/// <reference path="../VisualsData/semanticQuery/sqFrom.ts" />
/// <reference path="../VisualsData/semanticQuery/sqExprVisitor.ts" />
/// <reference path="../VisualsData/semanticQuery/semanticQuery.ts" />
/// <reference path="../VisualsData/semanticQuery/semanticQueryRewriter.ts" />
/// <reference path="../VisualsData/semanticQuery/sqHierarchyExprUtils.ts" />
/// <reference path="../VisualsData/semanticQuery/sqExprRewriter.ts" />
/// <reference path="../VisualsData/semanticQuery/sqExprUtils.ts" />
/// <reference path="../VisualsData/semanticQuery/sqAggregationOperations.ts" />
/// <reference path="../VisualsData/semanticQuery/exprPatterns/filterScopeIdsCollector.ts" />
/// <reference path="../VisualsData/semanticQuery/exprPatterns/fieldExprPattern.ts" />
/// <reference path="../VisualsData/semanticQuery/exprPatterns/scopeIdentityExtractor.ts" />
/// <reference path="../VisualsData/contracts/conceptualSchema.ts" />
/// <reference path="../VisualsData/contracts/queryProjection.ts" />
/// <reference path="../VisualsData/contracts/query.ts" />
/// <reference path="../VisualsData/contracts/dataShapeBinding.ts" />
/// <reference path="../VisualsData/contracts/dataShapeBindingDataReduction.ts" />
/// <reference path="../VisualsData/contracts/selector.ts" />
/// <reference path="../VisualsData/contracts/visualData.ts" />
/// <reference path="../VisualsData/contracts/FederatedConceptualSchema.ts" />
/// <reference path="../VisualsData/services/serialization/sqExprShortSerializer.ts" />
/// <reference path="../VisualsData/services/formattingService.ts" />
/// <reference path="../VisualsData/dataReader/dataReader.ts" />
/// <reference path="../VisualsData/formatting/valueFormatter.ts" />
/// <reference path="../VisualsData/formatting/dateTimeSequence.ts" />
/// <reference path="../VisualsData/formatting/displayUnitSystem.ts" />
/// <reference path="../VisualsData/formatting/numericSequenceRange.ts" />
/// <reference path="../VisualsData/formatting/numericSequence.ts" />

// PowerBIVisualsTests
/// <reference path="../PowerBIVisualsTests/customVisuals/sampleDataViews/DataViewBuilder.ts" />

// DataViewCreator
/// <reference path="./CustomVisualsData.ts"/>
